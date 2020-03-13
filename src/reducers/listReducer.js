import { FETCH_LISTS, NEW_LIST, DELETE_LIST } from "../actions/types";

const initialListState = {
  lists: [],
  list: {}
};

export default function(state = initialListState, action) {
  switch (action.type) {
    case FETCH_LISTS:
      return {
        ...state,
        lists: action.payload.data
      };

    case NEW_LIST:
      return {
        ...state,
        list: action.payload
      };

    case DELETE_LIST:
      return {
        ...state,
        list: action.payload
      };

    default:
      return state;
  }
}
