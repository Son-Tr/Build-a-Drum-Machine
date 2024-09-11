import { createStore } from "redux";
import audioReducer from "./audioReducer";

export const store = createStore(audioReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())