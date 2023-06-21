import React from 'react'
import {NavLink} from 'react-router-dom';
import s from "./MessageItemStyle.module.css";

type MessageItemType = {
    name: string;
    id: string;
}

const MessageItem = (props: MessageItemType) => {
    let path = '/messages/' + props.name;

    return <NavLink to={path} activeClassName={s.active} className={s.itemLinkImg}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU'
                 alt="Groot" className={s.ava}/>
            {props.name}
        </NavLink>
}
export default MessageItem
