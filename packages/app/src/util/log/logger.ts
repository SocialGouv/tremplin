import { Environment, getEnvironment } from "../environment";
import { piwikInit, piwikTrackEvent } from "./piwik";


class Logger {

  private env: Environment;

  constructor() {
    this.env = getEnvironment();
  }

  public init() {
    if (this.piwik.enabled) {
      piwikInit(this.piwik.siteURL, this.piwik.siteURL);
    }
  }

  public trackEvent(category: string, action: string, actionLabel: string) {
    if (this.piwik.enabled) {
      piwikTrackEvent(category, action, actionLabel);
    }
  }

  get piwik() {
    return this.env.piwik;
  }

}

export const logger = new Logger();
