import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_EVENTS, ADD_TO_BET_SLIP, REMOVE_FROM_BET_SLIP } from "../../redux/dispatchActions";
import Component from './Events';

function Events(props) {

  /* fetch list of events */
  const fetchEvents = () => {
    const { FETCH_EVENTS } = { ...props };
    FETCH_EVENTS();
  };

  useEffect(() => {
    fetchEvents()
  }, []);

  return <Component {...props} />;
}

const mapStateToProps = (state) => ({
  events: state.eventsReducer.events,
  bets: state.eventsReducer.bets,
});
const mapDispatchToProps = (dispatch) => {
  return {
    FETCH_EVENTS: () => dispatch(GET_EVENTS()),
    ADD_TO_BET_SLIP: (body) => dispatch(ADD_TO_BET_SLIP(body)),
    REMOVE_FROM_BET_SLIP: (id) => dispatch(REMOVE_FROM_BET_SLIP(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
