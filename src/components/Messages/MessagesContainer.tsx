import React from 'react'
import Messages from "./Messages";
import {addMyNewMessageAC, deleteMyNewMessageAC, updateMyNewMessageAC} from "../../redux/messages_page_reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

export type MessagesItemDataType = {
    id: string
    name: string
}
export type MessageDataType = {
    id: string
    message: string
}

export type MessagesPageType = {
    companionsData: Array<MessagesItemDataType>
    messageData: Array<MessageDataType>
    myNewMessageText: string
}
type MapStatePropsType = {
    messagesPage: MessagesPageType
}
type MapDispatchToPropsType = {
    updateMyNewMessageUI: (newText: string) => void
    addMyNewMessageUI: () => void
    onDelClickCallback: (id: string) => void
}
export type MessagesPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateMyNewMessageUI: (newText: string) => dispatch(updateMyNewMessageAC(newText)),
        addMyNewMessageUI: () => dispatch(addMyNewMessageAC()),
        onDelClickCallback: (id: string) => dispatch(deleteMyNewMessageAC(id)),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)

// const AuthRedirectComponent = withAuthRedirect(Messages)
//
// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//
// export default MessagesContainer