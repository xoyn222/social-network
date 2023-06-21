import React from 'react';
import {
    addPost,
    delPost,
    onDisLikeHandler,
    onLikeHandler,
    updateMyPostText
} from "../../../redux/profile_page_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";

export type PostsData = {
    id: string
    message: string
    likesCount: number
    disLikesCount: number
}
export type ProfilePageType = {
    postsData: Array<PostsData>
    newPostText: string
}
type MapStatePropsTypePosts = {
    postsData: Array<PostsData>
    newPostText: string
}

const mapStateToProps = (state: RootStateType): MapStatePropsTypePosts => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    updateMyPostText,
    addPost,
    onLikeHandler,
    onDisLikeHandler,
    delPost
})(MyPosts);


/*
const MyPostsContainer = (props: MyPostsContainerType) => {

    return <StoreContext.Consumer>
        {(store) => {

            let state = store.getState();
            const addPost = () => store.dispatch(addPostAC());
            const updateMyPostText = (text: string) => store.dispatch(updateMyPostTextAC(text));

            return <MyPosts updateMyPostText={updateMyPostText}
                     addPost={addPost}
                     newPostText={state.profilePage.newPostText}
                     postsData={state.profilePage.postsData}
                     dispatch={store.dispatch}
            />}
        }
    </StoreContext.Consumer>
}

type MapDispatchToPropsType = {
    updateMyPostText: (text: string) => void
    addPost: () => void
    onLikeHandler: (id: string) => void
    onDisLikeHandler: (id: string) => void
    delPost: (id: string) => void
}
 */