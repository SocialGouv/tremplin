import { Fragment } from "react";
import { Footer } from "./Footer";
import { TopBar } from "./TopBar";

export default (props: { children: any }) => {
  return (
    <Fragment>
      <header role="banner">
        <TopBar></TopBar>
      </header>
      <main role="main">
        {props.children}
      </main>
      <footer role="contentinfo">
        <Footer></Footer>
      </footer>
    </Fragment>
  )
}
