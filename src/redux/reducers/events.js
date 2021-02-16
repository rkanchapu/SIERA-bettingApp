import { EVENTS, BETS } from "../reducerActions/actionType";

const initialState = {
  events: [],
  bets: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EVENTS.SET:
      return {
        ...state,
        events: action.payload.events,
      };
    case BETS.APPEND:
      const betsClone = [...state.bets];
      betsClone.push(action.payload.bet);
      return {
        ...state,
        bets: betsClone,
      };
    case BETS.REMOVE:
      const filtered = state.bets.filter((bet) => {
        return bet.id !== action.payload.betId;
      });
      return {
        ...state,
        bets: filtered,
      };
    default:
      return state;
  }
}
