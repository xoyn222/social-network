import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    follow,
    loaderChanger,
    onPaginationClick,
    setUsers,
    setTotalUsersCount,
    unFollow, followInProgress, getUsersTC, followTC, unFollowTC,
} from "../../redux/users_reducer";
import {UsersPresent} from "./UsersPresent";
import s from './Users.module.css'
import {PreLoader} from "../common/PreLoader/PreLoader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type MapStatePropsType = {
    users: UsersApiType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followInProgressValue: number[]
}
export type MapDispatchToPropsType = {
    followTC: (userID: number) => void
    unFollowTC: (userID: number) => void
    onPaginationClick: (index: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}
export type UserApiType = {
    "name": string,
    "id": number,
    "photos": {
        "small": null,
        "large": null
    },
    "status": null,
    "followed": boolean,
}
export type UsersApiType = Array<UserApiType>;

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followInProgressValue: state.usersPage.followInProgressValue
    }
}

export class UsersContainer extends React.Component<MapStatePropsType & MapDispatchToPropsType>{

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageCHanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
        this.props.onPaginationClick(pageNumber)
    }

    render() {
        return <div className={s.presentContainer}>
            {this.props.isLoading
                ? <PreLoader/>
                : <UsersPresent {...this.props}
                                onPageChanged={this.onPageCHanged}
                />
            }
        </div>
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        followTC,
        unFollowTC,
        onPaginationClick,
        followInProgress,
        getUsersTC,
    })
)(UsersContainer)

















/*
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(follow(userID)),
        unFollow: (userID: number) => dispatch(unFollow(userID)),
        setUsers: (users: UsersApiType) => dispatch(setUsers(users)),
        onPaginationClick: (index: number) => dispatch(onPaginationClick(index)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCount(totalCount)),
        loaderChanger: (isLoading: boolean) => dispatch(loaderChanger(isLoading)),
        followInProgress: (value: boolean, userId: number) => dispatch(followInProgress(value, userId)),
        getUsersThunkCreator: (currentPage: any, pageSize: any) => dispatch(getUsersThunkCreator(currentPage, pageSize)),
    }
}
 */

// this.props.loaderChanger(true)
//
// usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
//     this.props.setUsers(data.items)
//     this.props.setTotalUsersCount(data.totalCount)
//     this.props.loaderChanger(false)
// })

//
// this.props.onPaginationClick(pageNumber)
// this.props.loaderChanger(true)
//
// usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
//     this.props.setUsers(data.items)
//     this.props.loaderChanger(false)
// })

// export default withAuthRedirect(connect(mapStateToProps, {
//     followTC,
//     unFollowTC,
//     onPaginationClick,
//     followInProgress,
//     getUsersTC,
// })(UsersContainer))