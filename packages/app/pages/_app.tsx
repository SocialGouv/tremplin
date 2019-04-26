import { initIconLibrary } from "@components/elements/Icon";
import { theme } from "@styles";
import { logger } from "@util";
import App, { Container, NextAppContext } from "next/app";
import Head from "next/head";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: Roboto;
    margin: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

`

// init PiwikReact
logger.init();
initIconLibrary();

export default class MyApp extends App {

  public static async getInitialProps(nextAppContext: NextAppContext) {
    let pageProps = {};

    const ctx = nextAppContext.ctx;
    const Component = nextAppContext.Component;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Head>
              <title>Tremplin</title>
              <meta name="og:title" property="og:title" content="Tremplin" />
            </Head>
            <GlobalStyle></GlobalStyle>
            <Component {...pageProps} />
          </React.Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}
