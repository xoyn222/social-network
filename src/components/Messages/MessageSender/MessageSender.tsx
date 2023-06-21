import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MessageSender.module.css'
import {IconButton, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

type MessageSenderType = {
    myNewMessageText: string
    updateMyNewMessageUI: (newText: string) => void
    addMyNewMessageUI: () => void
}

const MessageSender = (props: MessageSenderType) => {

    const myNewMessage = React.createRef<HTMLDivElement>()

    const addMyNewMessageUI = () => {
        if (props.myNewMessageText.trim()) {
            props.addMyNewMessageUI()
        }
    }

    const onMyNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        if (newText) {
            props.updateMyNewMessageUI(newText)
        }
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            if (props.myNewMessageText.trim() !== '') {
                props.addMyNewMessageUI()
            }
        }
    }

    return (
        <div className={s.container}>
                <TextField ref={myNewMessage}
                           className={s.textareaS}
                           onChange={onMyNewMessageChange}
                           onKeyDown={onKeyDown}
                           value={props.myNewMessageText}
                           label='Enter your message'
                           variant="outlined"
                           multiline
                           maxRows={4}
                           sx={{w: '70%',}}
                           InputProps={{sx: {height: '8vh'}}}
                ></TextField>
            <IconButton onClick={addMyNewMessageUI}
                        className={s.btnS}
                        size={'medium'}
                        color={'primary'}
            > <AddIcon/></IconButton>
        </div>
    );
};

export default MessageSender;