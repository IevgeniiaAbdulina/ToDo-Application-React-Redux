import { DELETE_TASK } from "../actions/types";

const deleteState = {
  task: {}
};

export default function(state = deleteState, action) {
  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state,
        task: action.payload.data
      };
    default:
      return state;
  }
}
