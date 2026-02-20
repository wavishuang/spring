import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public;

  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket || undefined,
    messagingSenderId: config.firebaseMessagingSenderId || undefined,
    appId: config.firebaseAppId || undefined,
    measurementId: config.firebaseMeasurementId || undefined,
  };

  let app = null;
  let analytics = null;

  try {
    app = initializeApp(firebaseConfig);
    if (process.client && config.firebaseMeasurementId) {
      analytics = getAnalytics(app);
    }
  } catch (e) {
    console.error("[Firebase plugin] 初始化失敗:", e);
  }

  return {
    provide: {
      firebaseApp: app,
      analytics: analytics ?? null,
    },
  };
});
