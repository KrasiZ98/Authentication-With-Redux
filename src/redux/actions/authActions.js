import { DELETE_USER, FORM_VALIDATION_ERROR, LOGIN_USER, LOGIN_USER_ERROR, LOGOUT_USER, REGISTER_USER, REGISTER_USER_ERROR, UPDATE_USER } from "./actionsTypes";

export const loginUser = (credentials, registeredUsers, navigate) => (dispatch) => {

    const authenticatedUser = registeredUsers.find(
        (user) =>
            user.email === credentials.email && user.password === credentials.password
    );

    if (authenticatedUser) {

        dispatch({
            type: LOGIN_USER,
            payload: authenticatedUser,
        });

        navigate('/');
    } else {
        dispatch({
            type: LOGIN_USER_ERROR,
            payload: "Email or password don't match",
        });

        setTimeout(() => {
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: null
            });
        }, 4000);

        navigate('/login');
    }
};


export const registerUser = (credentials, registeredUsers, navigate, storedUser) => (dispatch) => {

    const existingEmail = registeredUsers.find((user) => user.email === credentials.email);
    const existingUsername = registeredUsers.find((user) => user.username === credentials.username);

   

    if (existingEmail || existingUsername) {
        dispatch({
            type: REGISTER_USER_ERROR,
            payload: 'Email or Username has been taken.',
        });

        setTimeout(() => {
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: null
            });
        }, 4000);

        navigate('/register')
    } else {

        dispatch({
            type: REGISTER_USER,
            payload: credentials,
        })

        navigate('/');
    }
};

export const registerUserError = (error) => ({
    type: REGISTER_USER_ERROR,
    payload: error,
})

export const loginUserError = (error) => ({
    type: LOGIN_USER_ERROR,
    payload: error,
})

export const logoutUser = () => ({
    type: LOGOUT_USER,
});


export const deleteUser = (userId) => (dispatch) => {
    const choice = window.confirm('Are you sure you want to delete accaount?');

    if (choice) {
        dispatch({
            type: DELETE_USER,
            payload: userId
        });
    }
};

export const updateUser = (userId, updatedUser, navigate) => (dispatch) => {
    dispatch({
        type: UPDATE_USER,
        payload: { userId, updatedUser },
    });


    navigate('/');
};


export const formValidationError = (formError) => (dispatch) => {

    dispatch({
        type: FORM_VALIDATION_ERROR,
        payload: formError,
    });

    setTimeout(() => {
        dispatch({
            type: FORM_VALIDATION_ERROR,
            payload: null,
        });
    }, 6000)
}