import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from "../Friends/Friends";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type NavItemType = {
    itemName: string;
    urlName: string;
    logo: string
}

export const Navbar = () => {
    return (
        <div className={s.navBarContainer}>
            <div className={s.navContainer}>
                <NavItem urlName='/profile' itemName='Profile' logo="https://img.icons8.com/fluency/1x/lifecycle.png"/>
                <NavItem urlName='/messages' itemName='Messages' logo="https://img.icons8.com/fluency/1x/new-message.png"/>
                <NavItem urlName='/news' itemName='News' logo="https://img.icons8.com/fluency/1x/news.png"/>
                <NavItem urlName='/music' itemName='Music' logo="https://img.icons8.com/fluency/1x/music-library.png"/>
                <NavItem urlName='/settings' itemName='Settings' logo="https://img.icons8.com/fluency/1x/services.png"/>
                <NavItem urlName='/video' itemName='Video' logo="https://img.icons8.com/fluency/1x/laptop-play-video.png"/>
                <NavItem urlName='/users' itemName='Users' logo="https://img.icons8.com/fluency/1x/group.png"/>
            </div>
            <FriendsContainer/>
        </div>
    )
}

const NavItem = (props: NavItemType) =>
    <NavLink to={props.urlName} activeClassName={s.activeLink} className={s.link}>
        <img src={props.logo} alt="navbar logo" className={s.linkLogo}/>
        {props.itemName}
    </NavLink>;


type MapStatePropsType = {
    friendName: Array<{ id: string, name: string }>
}

type MapDispatchToPropsType = {}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        friendName: state.messagesPage.companionsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {}
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);



