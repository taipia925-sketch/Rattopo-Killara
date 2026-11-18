#!/bin/bash
# Crea l'APK di Smonta Studio: impacchetta l'app web e la mette nel progetto Android.
# Serve: Node.js, JDK 17+, Gradle 8.9+ e l'SDK Android (ANDROID_HOME).
set -e
cd "$(dirname "$0")"
(cd tools && [ -d node_modules ] || npm install --silent)
node tools/build.mjs
cd android
[ -f local.properties ] || echo "sdk.dir=${ANDROID_HOME:?imposta ANDROID_HOME}" > local.properties
${GRADLE:-gradle} --no-daemon -q assembleDebug
echo "APK pronto: $(pwd)/app/build/outputs/apk/debug/app-debug.apk"
