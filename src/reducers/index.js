export default function reduce(state, action) {
    console.log("reducer", state);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state, user: action.user
            }
        // case "SET_CLICKED": 
        //     return {
        //         ...state, clicked: action.clicked
        //     }

            default: 
            return state;
    };
};