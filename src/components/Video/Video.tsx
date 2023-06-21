import React from "react";
import s from './Video.module.css'

const Video = () => {
    return (
        <div className={s.videoContainer}>
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/HQmmM_qwG4k"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
            </iframe>
        </div>
    )
}

export default Video;