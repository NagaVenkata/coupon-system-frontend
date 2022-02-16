export function setUser(userName) {
    console.log("actions", userName);

    //create receipe
    return {
        type: 'SET_USER', 
        user: userName
    };
};


export function setUserId(userId) {
    console.log("actions", userId);

    //create receipe
    return {
        type: 'SET_USER_ID', 
        userid: userId
    };
};

