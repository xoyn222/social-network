import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {getAuthUsersDataTC} from "../../redux/auth_reducer";


export type PropsType = MSTP & MDTP
type StateType = {}

class HeaderContainer extends React.Component<PropsType, StateType>{
    componentDidMount() {
        this.props.getAuthUsersDataTC()
    }

    render() {
        return <Header {...this.props}/>
    }

}

type MSTP = {
    isAuth: boolean
    login: string
}
type MDTP = {
    getAuthUsersDataTC: () => void
}

const MapStateToProps = (state: RootStateType): MSTP => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(MapStateToProps, {getAuthUsersDataTC})(HeaderContainer)
