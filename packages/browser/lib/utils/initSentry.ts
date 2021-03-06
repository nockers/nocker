import { init } from "@sentry/browser"

export const initSentry = () => {
  init({
    dsn: "https://6e199171fc8e4bc29906ad62cf2178e2@o482319.ingest.sentry.io/6312067",
    tracesSampleRate: 1.0,
    // environment: process.env.NODE_ENV ?? "production",
    environment: "production",
    release: `browser@0.1.4`,
    beforeSend(event) {
      for (const exception of event.exception?.values ?? []) {
        console.error(exception.value)
      }
      return event
    },
  })
}
