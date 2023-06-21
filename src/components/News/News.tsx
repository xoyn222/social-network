import React from 'react'
import s from './News.module.css'

const News = ( ) => {

    let news = [
        'News number_1',
        'News number_2',
        'News number_3',
        'News number_4',
        'News number_5',
        'News number_6',
        'News number_7',
        'News number_8',
        'News number_9',
    ]

    let allNews = news.map((n,i) =>  <div className={s.newsItem} key={i}><a href='https://mail.ru/' target='_blank' rel="noreferrer">{n}</a></div>)

    return (
        <div className={s.newsContainer}>
            {allNews}
        </div>
    )
}

export default News