export {}
//
// import React from "react";
// import {
//     addPostAC, delPostAC,
//     onDisLikeHandlerAC,
//     onLikeHandlerAC,
//     updateMyPostTextAC,
// } from "./profile_page_reducer";
// import {
//     addMyNewMessageAC,
//     deleteMyNewMessageAC,
//     updateMyNewMessageAC
// } from "./messages_page_reducer";
// import {follow, setUsers, unFollow} from "./users_reducer";
//
// export type MessagesItemDataType = {
//     id: string
//     name: string
// }
// export type MessageDataType = {
//     id: string
//     message: string
// }
// type PostsData = {
//     id: string
//     message: string
//     likesCount: number
//     disLikesCount: number
// }
// type ProfilePageType = {
//     postsData: Array<PostsData>
//     newPostText: string
// }
// type MessagesPageType = {
//     companionsData: Array<MessagesItemDataType>
//     messageData: Array<MessageDataType>
//     myNewMessageText: string
// }
// export type StateType = {
//     profilePage: ProfilePageType
//     messagesPage: MessagesPageType
// }
// export type StoreType = {
//     _state: StateType
//     _callSubscriber: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionsTypes) => void
// }
//
// export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateMyPostTextAC> |  ReturnType<typeof addMyNewMessageAC> | ReturnType<typeof updateMyNewMessageAC> | ReturnType<typeof onLikeHandlerAC> | ReturnType<typeof onDisLikeHandlerAC> | ReturnType<typeof follow> | ReturnType<typeof unFollow> | ReturnType<typeof setUsers> | ReturnType<typeof delPostAC> | ReturnType<typeof deleteMyNewMessageAC>

// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: v1(), message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
//                 {id: v1(), message: 'It is my first post',  likesCount: 7, disLikesCount: 2},
//             ],
//             newPostText: ''
//         },
//         messagesPage: {
//             companionsData:  [
//                 {id: v1(), name: 'ilia'},
//                 {id: v1(), name: 'oleg'},
//                 {id: v1(), name: 'ivan'},
//                 {id: v1(), name: 'anna'},
//                 {id: v1(), name: 'ilai'},
//                 {id: v1(), name: 'petr'},
//             ],
//             messageData: [
//                 {id: v1(), message: 'push me'},
//                 {id: v1(), message: 'and then just touch me'},
//             ],
//             myNewMessageText: ''
//         },
//     },
//     _callSubscriber() {console.log('State changed')},
//     getState() {return this._state},
//     subscribe(observer: () => void) {this._callSubscriber = observer},
//     dispatch(action) { // {type: 'ADD POST'}
//         this._state.profilePage = profilePageReducer( this._state.profilePage, action )
//         this._state.messagesPage = messagesPageReducer( this._state.messagesPage, action )
//         this._callSubscriber()
//     }
// }


