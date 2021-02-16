import { EVENTS, LOADING, BETS } from "./actionType";

export const setLoading = () => ({ type: LOADING.SET_LOADING });
export const resetLoading = () => ({ type: LOADING.RESET_LOADING });

export const setEvents = (payload) => ({
  type: EVENTS.SET,
  payload,
});

export const appendToBetslip = (payload) => ({
  type: BETS.APPEND,
  payload,
});

export const removeFromBetslip = (payload) => ({
  type: BETS.REMOVE,
  payload,
});
