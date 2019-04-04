import getConfig from "next/config";
import Router from "next/router";
import ReactPiwik from "react-piwik";
import { debug } from "util";

const config = getConfig();

export const piwikInit = () => {
  const piwik = new ReactPiwik({
    siteId: config.publicRuntimeConfig.PIWIK_SITE_ID,
    trackErrors: true,
    url: config.publicRuntimeConfig.PIWIK_URL,
  });
  Router.events.on('routeChangeStart', (url) => {
    doTrackPageChange(url);
  });
}

export const piwikTrackEvent = (category, action, actionLabel) => {
  ReactPiwik.push(['trackEvent', category, action, actionLabel]);
}


const doTrackPageChange = url => {
  ReactPiwik.push(["setDocumentTitle", document && document.title]);
  ReactPiwik.push(["setCustomUrl", url]);
  ReactPiwik.push(["setGenerationTimeMs", 0]);
  ReactPiwik.push(["trackPageView"]);
};
