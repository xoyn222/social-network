import React from 'react'
import s from './Friends.module.css'

type FriendName = {
    friendName: Array<{ id: string, name: string }>
}

const Friends = (props: FriendName) => {
    return (
        <div className={s.friendsContainer}>
            <div className={s.friendsTitle}>Friends</div>
                <FriendAva friendName={props.friendName}/>
        </div>
    )
}

const FriendAva = (props: FriendName) => {

    let filteredFriendsNames = props.friendName.filter((friend, index) =>
        index < 3 ? friend : '');

    let buildFriends = filteredFriendsNames.map(friend => {
        return (
            <div key={friend.id} className={s.avaNameBlock}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrBK-eMr3u6DP0wzI2zNVrOGDizdwug_pNA&usqp=CAU'
                     alt='littleGroot'
                     key={friend.id}
                     className={s.friendAva}/>
                <span className={s.friendName}>{friend.name}</span>
            </div>
        )
    })

    return <div className={s.friendBlock}>{buildFriends}</div>
}

export default Friends

