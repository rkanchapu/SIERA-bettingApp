import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import appConfig from "../../appConfig";
import Component from "./HeaderWithDrawer";

function Header(props) {
  const history = useHistory();
  /* navigate function */
  const navigate = (path) => {
    history.push(path);
  };
  const { REACT_APP_NAME } = appConfig();
  return (
    <Component {...props} navigate={navigate} REACT_APP_NAME={REACT_APP_NAME} />
  );
}

const mapStateToProps = (state) => ({
  bets: state.eventsReducer.bets,
});

export default connect(mapStateToProps)(Header);
