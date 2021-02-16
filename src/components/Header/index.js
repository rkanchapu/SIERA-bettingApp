import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Component from "./HeaderWithDrawer";

function Header(props) {
  const history = useHistory();
  /* navigate function */
  const navigate = (path) => {
    history.push(path);
  };
  return <Component {...props} navigate={navigate} />;
}

const mapStateToProps = (state) => ({
  bets: state.eventsReducer.bets,
});

export default connect(mapStateToProps)(Header);
