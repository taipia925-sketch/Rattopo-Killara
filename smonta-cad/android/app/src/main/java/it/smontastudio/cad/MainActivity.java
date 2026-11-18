package it.smontastudio.cad;

import android.Manifest;
import android.app.Activity;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.print.PrintAttributes;
import android.print.PrintManager;
import android.provider.MediaStore;
import android.util.Base64;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.core.content.FileProvider;
import androidx.webkit.WebViewAssetLoader;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;

/** Smonta Studio: l'app web (in assets) mostrata in una WebView, con salvataggio file, condivisione e stampa. */
public class MainActivity extends Activity {
    private static final String START = "https://appassets.androidplatform.net/assets/index.html";
    private static final int REQ_FILE = 41;
    private WebView web;
    private ValueCallback<Uri[]> fileCallback;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        web = new WebView(this);
        web.setBackgroundColor(0xFFEEF1F5);
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(true);
        s.setTextZoom(100);

        final WebViewAssetLoader loader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();
        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                WebResourceResponse r = loader.shouldInterceptRequest(request.getUrl());
                if (r != null && request.getUrl().getPath() != null && request.getUrl().getPath().endsWith(".js")) {
                    r.setMimeType("text/javascript");
                }
                return r;
            }
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return !request.getUrl().getHost().equals("appassets.androidplatform.net");
            }
        });
        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
                if (fileCallback != null) fileCallback.onReceiveValue(null);
                fileCallback = callback;
                Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                String[] types = params.getAcceptTypes();
                String type = "*/*";
                if (types != null && types.length > 0 && types[0] != null && types[0].startsWith("video")) type = "video/*";
                i.setType(type);
                try {
                    startActivityForResult(Intent.createChooser(i, "Scegli un file"), REQ_FILE);
                } catch (Exception e) {
                    fileCallback = null;
                    return false;
                }
                return true;
            }
        });
        web.addJavascriptInterface(new Bridge(), "SmontaAndroid");
        if (savedInstanceState != null) web.restoreState(savedInstanceState);
        else web.loadUrl(START);

        if (Build.VERSION.SDK_INT <= 28 && checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, 7);
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == REQ_FILE && fileCallback != null) {
            Uri[] res = null;
            if (resultCode == RESULT_OK && data != null && data.getData() != null) res = new Uri[]{data.getData()};
            fileCallback.onReceiveValue(res);
            fileCallback = null;
            return;
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    public void onBackPressed() {
        web.evaluateJavascript("(window.smontaBack && window.smontaBack()) ? 'si' : 'no'", value -> {
            if (value == null || !value.contains("si")) MainActivity.super.onBackPressed();
        });
    }

    @Override
    protected void onPause() {
        super.onPause();
        web.evaluateJavascript("window.smonta && window.smonta.store && window.smonta.store.project && document.dispatchEvent(new Event('visibilitychange'))", null);
    }

    /** Funzioni chiamabili da JavaScript */
    private class Bridge {
        @JavascriptInterface
        public String saveFile(String name, String base64, String mime) {
            try {
                byte[] bytes = Base64.decode(base64, Base64.DEFAULT);
                String safe = name.replaceAll("[\\\\/:*?\"<>|]", "_");
                if (Build.VERSION.SDK_INT >= 29) {
                    ContentResolver cr = getContentResolver();
                    ContentValues v = new ContentValues();
                    v.put(MediaStore.MediaColumns.DISPLAY_NAME, safe);
                    v.put(MediaStore.MediaColumns.MIME_TYPE, mime == null || mime.isEmpty() ? "application/octet-stream" : mime);
                    v.put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/SmontaStudio");
                    Uri uri = cr.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, v);
                    if (uri == null) return "ERR";
                    try (OutputStream os = cr.openOutputStream(uri)) { os.write(bytes); }
                } else {
                    File dir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS), "SmontaStudio");
                    if (!dir.exists() && !dir.mkdirs()) return "ERR";
                    try (FileOutputStream os = new FileOutputStream(new File(dir, safe))) { os.write(bytes); }
                }
                return "Download/SmontaStudio/" + safe;
            } catch (Exception e) {
                return "ERR " + e.getMessage();
            }
        }

        @JavascriptInterface
        public void shareFile(String name, String base64, String mime) {
            try {
                File dir = new File(getCacheDir(), "condivisi");
                if (!dir.exists()) dir.mkdirs();
                File f = new File(dir, name.replaceAll("[\\\\/:*?\"<>|]", "_"));
                try (FileOutputStream os = new FileOutputStream(f)) { os.write(Base64.decode(base64, Base64.DEFAULT)); }
                Uri uri = FileProvider.getUriForFile(MainActivity.this, "it.smontastudio.cad.files", f);
                Intent i = new Intent(Intent.ACTION_SEND);
                i.setType(mime);
                i.putExtra(Intent.EXTRA_STREAM, uri);
                i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                startActivity(Intent.createChooser(i, "Condividi"));
            } catch (Exception e) {
                runOnUiThread(() -> Toast.makeText(MainActivity.this, "Condivisione non riuscita", Toast.LENGTH_SHORT).show());
            }
        }

        @JavascriptInterface
        public void print(String title) {
            runOnUiThread(() -> {
                PrintManager pm = (PrintManager) getSystemService(PRINT_SERVICE);
                String job = (title == null || title.isEmpty()) ? "Smonta Studio" : title;
                PrintAttributes attrs = new PrintAttributes.Builder().setMediaSize(PrintAttributes.MediaSize.ISO_A4.asLandscape()).build();
                pm.print(job, web.createPrintDocumentAdapter(job), attrs);
            });
        }
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) web.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
    }
}
