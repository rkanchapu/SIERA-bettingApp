import React from "react";
import { connect } from "react-redux";
import Component from "./Betslip";
import { REMOVE_FROM_BET_SLIP } from "../../redux/dispatchActions";

function Betslips(props) {
  return <Component {...props} />;
}

const mapStateToProps = (state) => ({
  bets: state.eventsReducer.bets,
});
const mapDispatchToProps = (dispatch) => {
  return {
    REMOVE_FROM_BET_SLIP: (id) => dispatch(REMOVE_FROM_BET_SLIP(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Betslips);
