import React from "react";
import s from './Post.module.css';
import {IconButton} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import DeleteIcon from '@mui/icons-material/Delete';

type PostType = {
    message: string
    likesCount: number
    disLikesCount: number
    id: string
    onLikeHandler: (id: string) => void
    onDisLikeHandler: (id: string) => void
    delPost: (id: string) => void
}

const Post = (props: PostType) => {

    const likeClick = () => {
        props.onLikeHandler(props.id)
    }

    const disLikeClick = () => {
        props.onDisLikeHandler(props.id)
    }

    const delClick = () => {
        props.delPost(props.id)
    }

    return (
        <li className={s.postContainer}>
            <div className={s.imgSpanContainer}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU' alt='brad pit' className={s.itemImg}/>
                <span className={s.anglePost}></span>
                <span className={s.postMessage}>{props.message}</span>
            </div>
            <div className={s.likeDisContainer}>
                <IconButton onClick={likeClick}
                            color={'primary'}
                            sx={{boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.3)'}}
                >
                    <ThumbUpAltIcon />
                </IconButton>
                <span className={s.likes}>{props.likesCount}</span>
                <IconButton onClick={disLikeClick}
                            color={'primary'}
                            sx={{boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.3)'}}
                >
                    <ThumbDownAltIcon />
                </IconButton>
                <span className={s.likes}>{props.disLikesCount}</span>
                <IconButton onClick={delClick}
                            color={'primary'}
                            sx={{boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.3)'}}
                >
                    <DeleteIcon />
                </IconButton>
            </div>
        </li>
    );
}

export default Post;
