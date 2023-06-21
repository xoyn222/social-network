import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

export type mapStateToPropsForRedirect = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: RootStateType): mapStateToPropsForRedirect => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T> (Component: ComponentType<T>)  {

    class RedirectComponent extends React.Component<mapStateToPropsForRedirect> {
        constructor(props: mapStateToPropsForRedirect) {
            super(props);
        }

        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            }
            const {isAuth, ...rest} = this.props
            return <Component {...rest as T&{children: React.ReactNode}}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}