import React from 'react';
import s from './Users.module.css'
import {Button} from "@mui/material";
import axios from "axios";

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

type UsersPropsType = {
    users: Array<UserApiType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersApiType) => void
}

export const UsersFunctional = (props: UsersPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div className={s.container}>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => {

                    const onFollowClick = () => props.unFollow(u.id);
                    const onUnFollowClick = () => props.follow(u.id);

                    return (
                        <div key={u.id} className={s.container_2}>
                            <div className={s.imgBtn}>
                                    <img src={u.photos.small !== null ? u.photos.small : 'https://kartinkin.net/uploads/posts/2021-03/1616119039_2-p-bred-pitt-krasivie-foto-2.jpg'} alt='ava'/>
                                <div>
                                    {
                                        u.followed ? <Button onClick={onFollowClick}
                                                             variant={'contained'}
                                                             sx={{m: '10px', width: '110px'}}
                                            >Follow</Button>
                                            : <Button onClick={onUnFollowClick}
                                                      variant={'outlined'}
                                                      sx={{m: '10px'}}
                                            >Unfollow</Button>
                                    }
                                </div>
                            </div>
                            <div className={s.information}>
                                <div>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};


/*
{users: [
                    {
                        id: v1(),
                        photoUrl: 'https://kartinkin.net/uploads/posts/2021-03/1616119039_2-p-bred-pitt-krasivie-foto-2.jpg',
                        fullName: 'Eddy Murphy',
                        status: 'I am the best actor',
                        location: {city: 'Minsk', country: 'Belarus'},
                        followed: true
                    },
                    {
                        id: v1(),
                        photoUrl: 'https://kartinkin.net/uploads/posts/2021-03/1616119039_2-p-bred-pitt-krasivie-foto-2.jpg',
                        fullName: 'Kris Taker',
                        status: 'I am the best actor',
                        location: {city: 'Moscow', country: 'RF'},
                        followed: false
                    },
                    {
                        id: v1(),
                        photoUrl: 'https://kartinkin.net/uploads/posts/2021-03/1616119039_2-p-bred-pitt-krasivie-foto-2.jpg',
                        fullName: 'Arnold S.',
                        status: 'I am the best actor',
                        location: {city: 'Melbourne', country: 'Australia'},
                        followed: false
                    },
                    {
                        id: v1(),
                        photoUrl: 'https://kartinkin.net/uploads/posts/2021-03/1616119039_2-p-bred-pitt-krasivie-foto-2.jpg',
                        fullName: 'Silvester S.',
                        status: 'I am the best actor',
                        location: {city: 'Rome', country: 'Italy'},
                        followed: false
                    },
                ]}
 */