import React from 'react';
import s from './App.module.css';
import Header from "./components/Headers/Header";
import {Redirect, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Video from "./components/Video/Video";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Navbar} from "./components/Navbars/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Headers/HeaderContainer";
import {Login} from "./components/Login/Login";


const App = () => {
    return (
        <div className={s.container}>
            <HeaderContainer/>
            <div className={s.body}>
                <Navbar/>
                <div className={s.main}>
                    <Route path='/' render={() => <Redirect to={'/profile'}/>}/>
                    <Route path='/*' render={() => <Redirect to={'/profile'}/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/messages' render={() => <MessagesContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/video' render={() => <Video/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;

