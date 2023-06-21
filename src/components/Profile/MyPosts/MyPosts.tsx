import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {IconButton, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {onDisLikeHandler, onLikeHandler} from "../../../redux/profile_page_reducer";

type MyPostsType = {
    postsData: Array<{id: string, message: string, likesCount: number, disLikesCount: number}>
    newPostText: string
    updateMyPostText: (text: string) => void
    addPost: () => void
    onLikeHandler: (id: string) => void
    onDisLikeHandler: (id: string) => void
    delPost: (id: string) => void
}

const MyPosts = (props: MyPostsType) => {

    const [listRef] = useAutoAnimate<HTMLUListElement>()

    const postsDataContent = props.postsData.map( p =>
        <Post key={p.id}
              id={p.id}
              message={p.message}
              likesCount={p.likesCount}
              disLikesCount={p.disLikesCount}
              onLikeHandler={props.onLikeHandler}
              onDisLikeHandler={props.onDisLikeHandler}
              delPost={props.delPost}
        />
    );

    const newPostElement = React.createRef<HTMLDivElement>()

    const addPost = () => {
        if (props.newPostText.trim()) {
            props.addPost()
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.updateMyPostText(e.currentTarget.value)
        }
    }
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            if (props.newPostText.trim()) {
                props.addPost()
            }
        }
    }

    return (
        <div className={s.postsContainer}>
            <div className={s.postsBlock}>
                <h3 className={s.title}>My Posts</h3>
                <div className={s.addPostContainer}>
                    <TextField className={s.textarea}
                              ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}
                              onKeyDown={onKeyDown}
                              label={'Add your new post'}
                              multiline
                              minRows={4}
                              maxRows={4}
                    ></TextField>
                    <IconButton className={s.btnPost} onClick={addPost} size={'medium'} color={'primary'} sx={{ml: '20px'}}>
                        <AddIcon />
                    </IconButton>
                </div>
                <div className={s.posts}>
                    <ul ref={listRef}>
                        {postsDataContent}
                    </ul>
                </div>
            </div>
            <div className={s.sideBar}>
            </div>
        </div>
    );
}

export default MyPosts;
