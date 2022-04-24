import { combineReducers } from "redux";
import cart from "./Index";
import quantity from "./cartQuantity";

const reduc = combineReducers({ cart, quantity });

export default reduc;
