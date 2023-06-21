import {ActionsTypes, AppThunk} from "./redux-store";
import {UsersApiType} from "../components/Users/UsersContainer";
import {MapStatePropsType} from "../components/Users/UsersContainer";
import {usersAPI} from "../api/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const LOADER_CHANGE = "LOADER_CHANGE"
const FOLLOW_IN_PROGRESS = "FOLLOW_IN_PROGRESS"

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followInProgressValue: []
};

export const usersReducer = (state: MapStatePropsType = initialState, action: ActionsTypes): MapStatePropsType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case LOADER_CHANGE:
            return {...state, isLoading: action.isLoading}
        case FOLLOW_IN_PROGRESS:
            return {
                ...state, followInProgressValue: action.value
                    ? [...state.followInProgressValue, action.userId]
                    : state.followInProgressValue.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: UsersApiType) => ({type: SET_USERS, users} as const)
export const onPaginationClick = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
export const loaderChanger = (isLoading: boolean) => ({type: LOADER_CHANGE, isLoading} as const)
export const followInProgress = (value: boolean, userId: number) => ({type: FOLLOW_IN_PROGRESS, value, userId} as const)

export const getUsersTC = (currentPage: number, pageSize: number): AppThunk => async dispatch => {
    dispatch(loaderChanger(true))
    try {
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(loaderChanger(false))
    } catch(error) {
        console.log(error)
    }
}

export const followTC = (userId: number): AppThunk => dispatch => {
    dispatch(followInProgress(true, userId))
    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(followInProgress(false, userId))
        })
}

export const unFollowTC = (userId: number): AppThunk => dispatch => {
    dispatch(followInProgress(true, userId))
    usersAPI.unFollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollow(userId))
            }
            dispatch(followInProgress(false, userId))
        })
}

