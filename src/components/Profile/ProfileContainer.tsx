import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, loginTC, updateStatusTC} from "../../redux/profile_page_reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type PathParamsType = { userId: string }
export type ProfileDataType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
type ProfileContainerType = MapStatePropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>
type MapStatePropsType = {
    profile: ProfileDataType
    status: string
}
type MapDispatchToPropsType = {
    loginTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '28327'
        }
        this.props.loginTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        return <Profile {...this.props}
                        status={this.props.status}
                        profile={this.props.profile}
                        updateStatusTC={this.props.updateStatusTC}
        />
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status
    })



export default compose<React.ComponentType>(
    connect(mapStateToProps, {loginTC, getStatusTC, updateStatusTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

// export default compose<React.ComponentType>(
//     connect(mapStateToProps, {loginTC}),
//     withAuthRedirect(AuthRedirectComponen))(withRouter(ProfileContainer))

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// const withR = withRouter(ProfileContainer)
// const ProfileContainerWithProps = connect(mapStateToProps, {loginTC})(withR)
// let AuthRedirectComponen = withAuthRedirect(ProfileContainerWithProps)


