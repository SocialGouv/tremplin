import Router from "next/router";
import ReactPiwik from "react-piwik";
import { debug } from "util";


export const piwikInit = (piwikURL, siteId) => {
  const piwik = new ReactPiwik({
    siteId: siteId,
    trackErrors: true,
    url: piwikURL,
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
