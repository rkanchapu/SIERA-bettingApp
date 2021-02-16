import React from "react";
import appConfig from "../../appConfig";
import Component from "./Footer";

function Footer(props) {
  const { REACT_APP_NAME } = appConfig();
  return <Component REACT_APP_NAME={REACT_APP_NAME} />;
}

export default Footer;
