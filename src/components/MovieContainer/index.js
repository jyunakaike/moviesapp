import React from 'react';
import style from './MovieContainer.module.scss';

export const MovieContainer = ({ original_title, poster_path }) => {
    return (
        <div className={style["movie-container"]} >
            <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                className={style["movie-img"]}
                alt={original_title}
            />
        </div >
    )
}
