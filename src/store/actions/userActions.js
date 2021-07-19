import UserService from "../../services/UserService";
import { toast } from "react-toastify";

export const types = {
    ADD_USER: "ADD_USER",
    DELETE_USER: "DELETE_USER",
    GET_ALL: "GET_ALL",
    USER_LOGIN: "USER_LOGIN",
    USER_LOGOUT: "USER_LOGOUT",
};
export function addUser(user) {
    return { type: types.ADD_USER, payload: user }
}
export function getAll(users) {
    return { type: types.GET_ALL, payload: users }
}
export function deleteUser(user) {
    return { type: types.DELETE_USER, payload: user }
}

export function userLogin(user) {
    return {
        type: types.USER_LOGIN,
        payload: user
    }
}

export function userLogout(user) {
    return {
        type: types.USER_LOGOUT,
        payload: user
    }
}


const userService = new UserService();
export const displayToast = (success, message) => {
    if (success) {
        toast.success(message)
    }
    else {
        toast.error(message)
    }
}

export const login = (values) => async (dispatch) => {
    return await userService.login(values).then((response) => {
        displayToast(response.data.success, response.data.message);
        if (response.data.success) {
            dispatch(addUser(response.data.data))
            return response.data.data
        }
        return null
    });
};

export const getByEmail = (email) => async (dispatch) => {
    await userService.getByEmail(email).then((response) => dispatch(getAll(response.data.data)));
};