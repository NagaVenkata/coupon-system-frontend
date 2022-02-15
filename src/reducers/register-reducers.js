export default function RegisterReducers(state, action) {
    console.log("registerReducer:", state);

    switch(action.type) {
        case 'SET_USER':
            //add change to state
            return {
                ...state, user: action.user
            }
        
        default:
        return state;
    };
}; 