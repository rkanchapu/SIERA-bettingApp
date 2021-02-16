import { LOADING } from "../reducerActions/actionType";

const initialState = {
  isLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING.RESET_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
