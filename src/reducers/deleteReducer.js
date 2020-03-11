import { DELETE_TASK, DELETE_LIST } from "../actions/types";

const deleteState = {
  task: {},
  list: {}
};

export default function(state = deleteState, action) {
  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state,
        task: action.payload.data
      };

    case DELETE_LIST:
      return {
        ...state,
        list: action.payload.data
      };

    default:
      return state;
  }
}
