import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import { createPromise } from "redux-promise-middleware";
import { createLogger } from "redux-logger";

const middleware = applyMiddleware(createPromise(), createLogger());

export default createStore(reducers, middleware);
