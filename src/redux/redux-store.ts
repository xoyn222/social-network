import {applyMiddleware, combineReducers, createStore} from "redux";
import {
    addPost, delPost,
    onDisLikeHandler,
    onLikeHandler,
    profilePageReducer, setStatusAC, setUserProfile,
    updateMyPostText
} from "./profile_page_reducer";
import {
    addMyNewMessageAC,
    deleteMyNewMessageAC,
    messagesPageReducer,
    updateMyNewMessageAC
} from "./messages_page_reducer";
import {
    follow, loaderChanger,
    onPaginationClick,
    setUsers,
    setTotalUsersCount,
    unFollow,
    usersReducer, followInProgress
} from "./users_reducer";
import {authReducer, setAuthUserData} from "./auth_reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type StoreType = typeof store;
export type RootStateType = ReturnType<typeof rootReducer>
export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateMyPostText>
    | ReturnType<typeof addMyNewMessageAC>
    | ReturnType<typeof updateMyNewMessageAC>
    | ReturnType<typeof onLikeHandler>
    | ReturnType<typeof onDisLikeHandler>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof delPost>
    | ReturnType<typeof deleteMyNewMessageAC>
    | ReturnType<typeof onPaginationClick>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof loaderChanger>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof followInProgress>
    | ReturnType<typeof setStatusAC>

export type AppThunk<ReturnType = void> = ThunkAction<void, RootStateType, unknown, ActionsTypes>
// @ts-ignore
window.store = store