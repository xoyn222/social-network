import React, {FC} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PropsType} from "./HeaderContainer";

const Header = (props: PropsType) => {
    return (
        <header className={s.headerContainer}>
            <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' className={s.logo}/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login}</div> : <NavLink to={'/login'} >Login</NavLink>}
            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU' alt="miniAva" className={s.miniAva}/>
            </div>
        </header>
    );
}

export default Header;