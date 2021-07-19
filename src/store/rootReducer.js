
import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    auth: userReducer
})

export default rootReducer;
