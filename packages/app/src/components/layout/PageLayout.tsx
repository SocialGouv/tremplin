import * as React from "react";
import { Fragment } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TopBar } from "./TopBar";

export class PageLayout extends React.Component<{ header?: boolean }> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Fragment>
        <TopBar></TopBar>
        {this.props.header && <Header />}
        {this.props.children}
        <Footer></Footer>
      </Fragment>
    );
  }

}
