import React from 'react'
import s from './Music.module.css'

const Music = ( ) => {
    return (
        <div className={s.musiContainer}>
            <audio controls>
                <source src="https://ruo.morsmusic.org/load/714212546/Led_Zepagain_-_When_the_Levee_Breaks_(musmore.com).mp3" type="audio/mp3"></source>
            </audio>
        </div>
    )
}

export default Music
