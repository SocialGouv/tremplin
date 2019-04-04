import { piwikInit, piwikTrackEvent } from "./piwik";


class Logger {

  public init() {
    piwikInit();
  }

  public trackEvent(category: string, action: string, actionLabel: string) {
    piwikTrackEvent(category, action, actionLabel);
  }

}

export const logger = new Logger();
