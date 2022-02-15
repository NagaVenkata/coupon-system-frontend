export function setUser(userName) {
    console.log("actions", userName);

    //create receipe
    return {
        type: 'SET_USER', 
        user: userName
    };
};