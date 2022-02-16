import reduce from "../reducers/index";
import { createStore } from "redux";

const initialState = { 
    user: "Eva", 
    userid: ''
    // clicked: 0
};

// reduce-metoden skapar statet hela tiden
export const store = createStore(reduce, initialState);