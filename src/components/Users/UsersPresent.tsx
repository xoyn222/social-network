import React, {FC} from 'react';
import s from "./Users.module.css";
import {Button} from "@mui/material";
import {UsersApiType} from "./UsersContainer";
import {NavLink} from "react-router-dom";


type UsersPresentType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (page: number) => void
    currentPage: number
    followTC: (userID: number) => void
    unFollowTC: (userID: number) => void
    followInProgressValue: number[]
    users: UsersApiType
}

export const UsersPresent: FC<UsersPresentType> = ({...props}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let usersPages = []
    for (let i = 1; i <= pagesCount; i++) {
        usersPages.push(i)
    }

    return (
        <div className={s.container}>
            <div className={s.btnsContainer}>
                {usersPages.map((page, i) => {
                    if ( i > 1000 &&  i < 1010) {
                        return <button onClick={() => props.onPageChanged(page)}
                                       className={props.currentPage === page ? s.selectedPage : ''}
                                       key={page}
                        >{page}</button>
                    }
                })}
            </div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id} className={s.container_2}>
                            <div className={s.imgBtn}>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small !== null
                                        ? u.photos.small
                                        : 'https://kartinkin.net/uploads/posts/2021-03/1616119039_2-p-bred-pitt-krasivie-foto-2.jpg'} alt='ava'/>
                                </NavLink>
                                <div>
                                    {
                                        u.followed
                                            ? <Button onClick={() => props.unFollowTC(u.id)}
                                                      variant={'outlined'}
                                                      sx={{m: '10px', width: '110px'}}
                                                      disabled={props.followInProgressValue.some(id => id === u.id)}
                                            >Unfollow</Button>
                                            : <Button onClick={() => props.followTC(u.id)}
                                                      variant={'contained'}
                                                      sx={{m: '10px'}}
                                                      disabled={props.followInProgressValue.some(id => id === u.id)}
                                            >Follow</Button>
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
