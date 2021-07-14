import UserService from "../../services/UserService";
import CandidateService from "../../services/CandidateService";
import EmployerService from "../../services/EmployerService";
import EmployeeService from "../../services/EmployeeService";
import { toast } from "react-toastify";

export const types = {
    ADD_USER: "ADD_USER",
    DELETE_USER: "DELETE_USER",
    GET_ALL: "GET_ALL",
};
export function addUser(user) {
    return { type: types.ADD_USER, payload: user }
}
export function getAll(users) {
    return { type: types.GET_ALL, payload: users }
}

export function logout() {
    return {
        type: types.DELETE_USER,
        payload: {},
    };
}


const userService = new UserService();
const candidateService = new CandidateService();
const employerService = new EmployerService();
const employeeService = new EmployeeService();
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