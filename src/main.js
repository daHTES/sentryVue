import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/main.pcss"
import * as Sentry from "@sentry/vue";

const app = createApp(App)
const __SENTRY_RELEASE__ = {};

Sentry.init({
    app,
    dsn: "https://4aa9c8f833f90ff327c9b1e73434e99a@o4506937345638400.ingest.us.sentry.io/4506937347997696",
    logErrors: true,
    release: __SENTRY_RELEASE__,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
  
app.use(router)
.mount('#app')
