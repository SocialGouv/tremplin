import getConfig from "next/config";
import Router from "next/router";
import ReactPiwik from "react-piwik";

const config = getConfig();

const piwik = new ReactPiwik({
  siteId: config.publicRuntimeConfig.PIWIK_SITE_ID,
  trackErrors: true,
  url: config.publicRuntimeConfig.PIWIK_URL,
});

Router.events.on('routeChangeStart', (url) => {
  doTrackPageChange(url);
})

const doTrackPageChange = url => {
  ReactPiwik.push(["setDocumentTitle", document && document.title]);
  ReactPiwik.push(["setCustomUrl", url]);
  ReactPiwik.push(["setGenerationTimeMs", 0]);
  ReactPiwik.push(["trackPageView"]);
};

export const trackContactPhone = (value) => {
  ReactPiwik.push(['trackEvent', 'offre', 'contact-phone', value]);
}

export const trackContactEmail = (value) => {
  ReactPiwik.push(['trackEvent', 'offre', 'contact-email', value]);
}
