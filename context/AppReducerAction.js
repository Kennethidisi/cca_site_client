export const loginStart = ()=> ({
    type: "LOGIN_START"
});

export const loginSucess = (user)=> ({
    type: "LOGIN_SUCESS",
    payload: user
});

export const loginError = (error)=> ({
    type: "LOGIN_ERROR",
    payload: error
});