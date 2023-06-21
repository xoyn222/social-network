import {ActionsTypes, AppThunk} from "./redux-store";
import {authAPI} from "../api/api";


export type ServerUserDataType = {
    id: number
    login: string
    email: string
}

export type UserDataType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}

const SET_USER_DATA = 'SET_USER_DATA';

const initialState: UserDataType = {
    id: 0,
    login: '',
    email: '',
    isAuth: false
};

export const authReducer = (state = initialState, action: ActionsTypes): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.userData, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (userData: ServerUserDataType) => ({type: SET_USER_DATA, userData} as const)

export const getAuthUsersDataTC = (): AppThunk => async dispatch => {
    const data = await authAPI.authorization()
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data))
            }
}




