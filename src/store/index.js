import reduce from "../reducers/index-addlater";
import { createStore } from "redux";

const initialState = { 
    user: "Eva", 
    // clicked: 0
};

// reduce-metoden skapar statet hela tiden
export const store = createStore(reduce, initialState);