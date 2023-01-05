import { combineReducers } from "redux";

import CreateReducer from "./CreateReducer";

const reducers = combineReducers({
    create: CreateReducer
})

export default reducers