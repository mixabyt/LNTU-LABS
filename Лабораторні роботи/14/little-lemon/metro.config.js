// Конфігурація Metro для вебверсії expo-sqlite: потрібна підтримка файлів .wasm.
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
config.resolver.assetExts.push('wasm');

module.exports = config;
