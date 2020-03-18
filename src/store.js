// Documentation about Redux STORE here:
// https://github.com/reduxjs/redux/blob/master/docs/api/Store.md

// Create STORE:
// https://github.com/reduxjs/redux/blob/master/docs/api/createStore.md

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const initialState = {};

// const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    // applyMiddleware(...middleware),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    // reactReduxFirebase(fbConfig),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  console.log("state updated");
  console.log(store.getState());
});

export default store;
