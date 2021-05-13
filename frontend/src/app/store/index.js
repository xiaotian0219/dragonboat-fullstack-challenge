import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import projects from "./projects/reducer";

const logger =
  process.env.NODE_ENV === "development" && createLogger({ collapsed: true });

const dragonboatMiddleware = [thunk];

const middleware = [...dragonboatMiddleware, logger].filter(Boolean);

const store = createStore(
  combineReducers({
    projects,
  }),
  {},
  applyMiddleware(...middleware)
);

export default store;
