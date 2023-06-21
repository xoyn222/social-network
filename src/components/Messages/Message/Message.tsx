import React from 'react'
import s from './MessageStyle.module.css'
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type MessageType = {
    message: string
    id: string
    index: number
    onDelClickCallback: (id: string) => void
}

const Message = (props: MessageType) => {

    let txtAndAvaContainer = s.txtAndAvaMe
    let txt = s.txtMe
    let ava = s.avaMe
    let angle = s.angleMe

    if (props.index === 1) {
         txtAndAvaContainer = s.txtAndAvaHim
         txt = s.txtHim
         ava = s.avaHim
         angle = s.angleHim
    }

    if (props.index > 1) {
        txtAndAvaContainer = s.txtAndAvaMeNew
    }

    const onDelClick = () => {
        props.onDelClickCallback(props.id)
    }

    return (
        <li className={txtAndAvaContainer}>
            <div className={txt}>
                <span className={s.exactText}>{props.message}</span>
                <IconButton onClick={onDelClick}
                            color={'primary'}
                            className={s.deleteIcon}
                >
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className={angle}></div>
            <img src='https://kartinkin.net/uploads/posts/2021-03/1616119039_2-p-bred-pitt-krasivie-foto-2.jpg'
                alt="Groot" className={ava}/>
        </li>
    )

}

export default Message