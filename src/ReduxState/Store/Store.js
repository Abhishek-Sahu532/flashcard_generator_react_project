import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../Reducer/index";
import {saveToLocalStorage ,loadFromLocalStorage } from '../Reducer/CreateReducer'
// import CreateReducer from "../Reducer/CreateReducer";

//redux store
export const Store = createStore(reducers, loadFromLocalStorage(), applyMiddleware(thunk))

Store.subscribe(() => saveToLocalStorage(Store.getState()));