import { DELETE_TASK } from "../actions/types";

const deleteState = {
  // put this state to store like below:
  task: {}
};

// THUS IS IN STORE:........................
// const initialState = {};
// const initialListsState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   initialListsState.......................

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
