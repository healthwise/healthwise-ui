export default class Insights {
  constructor(provider) {
    this.insightsConfig = {}
    this.insightsProvider = provider

    if (!provider) {
      // grab the page-included Insights provider
      if (window.org && window.org.healthwise) {
        // global config
        if (window.org.healthwise.config) {
          this.insightsConfig = window.org.healthwise.config
        }

        // Insights provider
        if (window.org.healthwise.analytics && window.org.healthwise.analytics.insights) {
          this.insightsProvider = window.org.healthwise.analytics.insights
        }
      } else {
        this.sendError()
      }
    }
  }

  setConfigOption(key, value) {
    this.insightsConfig[key] = value
  }

  trackEvent(event) {
    if (this.insightsProvider && this.insightsProvider.trackEvent) {
      this.insightsProvider.trackEvent(event)
    } else {
      this.sendError(event)
    }
  }

  sendError(event) {
    let errorMsg = 'Insights provider not available.'

    if (event) errorMsg += console.error(errorMsg + '  Event not sent.', event)
    else console.error(errorMsg, event)
  }
}
