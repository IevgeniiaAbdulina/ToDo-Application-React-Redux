import { FETCH_TASKS, NEW_TASK } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS:
      console.log("reducer");
      console.log("what is - action.type", action.type);
      console.log("what is -items: action.payload", action.payload);

      return {
        ...state,
        items: action.payload.data
      };

    case NEW_TASK:
      return {
        ...state,
        item: action.payload.data // item: action.payload ????
      };

    default:
      return state;
  }
}
