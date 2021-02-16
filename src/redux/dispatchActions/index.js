import { getEvents } from "../../APIcalls";
import { ToastMessage } from "../../components/ToastMessage";
import { resetLoading, setEvents, setLoading, appendToBetslip, removeFromBetslip } from "../reducerActions";

export const GET_EVENTS = () => {
  return async (dispatch) => {
    try {
      /* start loading */
      dispatch(setLoading());
      /* make api call */
      const apiResponse = await getEvents();
      /* stop loading */
      dispatch(resetLoading());
      const reducerPayload = {
        events: apiResponse.data
      }
      /* set api response to reducer */
      dispatch(setEvents(reducerPayload))
    } catch (err) {
      dispatch(resetLoading());
      ToastMessage("error", "Execution error", err.message);
    }
  };
};

export const ADD_TO_BET_SLIP = (body) => {
  return async (dispatch) => {
    try {
      const reducerPayload = {
        bet: body
      }
      dispatch(appendToBetslip(reducerPayload))
    } catch (err) {
      dispatch(resetLoading());
      ToastMessage("error", "Execution error", err.message);
    }
  }
}
export const REMOVE_FROM_BET_SLIP = (id) => {
  return async (dispatch) => {
    try {
      const reducerPayload = {
        betId: id
      }
      dispatch(removeFromBetslip(reducerPayload))
    } catch (err) {
      dispatch(resetLoading());
      ToastMessage("error", "Execution error", err.message);
    }
  }
}