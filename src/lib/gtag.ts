import { isBrowser } from "./is-browser"

type GtagProps = {
  (
    event: "event",
    action: "viewing" | "engagement" | "click",
    value: {
      event_id?: string
      event_category?: string
      event_label?: string
      value?: string
    }
  )
}

declare global {
  interface Window {
    gtag: (
      event: string,
      action: string,
      value: {
        [key: string]: string
      }
    ) => void
  }
}

/**
 * To send Google Analytics Events on a web page where
 * the global site tag has been added, use the gtag.js
 * event command with the following syntax:
 *
 * @url https://developers.google.com/analytics/devguides/collection/gtagjs/events
 *
 * gtag('event', <action>, {
 *   'event_category': <category>,
 *   'event_label': <label>,
 *   'value': <value>
 * });
 */
export const useGtag: GtagProps = (event, action, value) => {
  console.log(event, action, value)
  if (isBrowser && window.gtag) {
    window.gtag(event, action, {
      event_id: value.event_id,
    })
  }
}
