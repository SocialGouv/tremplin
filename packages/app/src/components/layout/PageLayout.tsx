import { Fragment } from "react";
import { Footer } from "./Footer";
import { TopBar } from "./TopBar";

export default (props: { children: any }) => {
  return (
    <Fragment>
      <TopBar></TopBar>
      {props.children}
      <Footer></Footer>
    </Fragment>
  )
}
