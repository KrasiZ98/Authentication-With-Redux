import { DELETE_USER, FORM_VALIDATION_ERROR, LOGIN_USER, LOGIN_USER_ERROR, LOGOUT_USER, REGISTER_USER, REGISTER_USER_ERROR, UPDATE_USER } from "../actions/actionsTypes";

const initialValue = {
    users: [],
    user: null,
    error: null,
};

const authReducer = (state = initialValue, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, user: action.payload, error: null };
        case LOGIN_USER_ERROR:
            return { ...state, user: null, error: action.payload };
        case REGISTER_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                user: action.payload,
                error: null
            };
        case REGISTER_USER_ERROR:
            return { ...state, error: action.payload, user: null };
        case LOGOUT_USER:
            return { ...state, user: null, error: null };
        case DELETE_USER:
            const deletedUser = state.users.filter((user) => user.id !== action.payload);
            return {
                ...state, users: deletedUser, error: null, user: null,
            };
        case UPDATE_USER:
            const updatedUser = state.users.map((user) =>
                user.id === action.payload.userId ? action.payload.updatedUser : user);
            return {
                ...state, users: updatedUser, error: null, user: action.payload.updatedUser,
            };
        case FORM_VALIDATION_ERROR:
            return {
                ...state, error: action.payload, user: null,
            }
        default:
            return state;
    }
}

export default authReducer;