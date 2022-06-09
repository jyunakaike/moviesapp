import Link from 'next/link';
import React from 'react';
import style from './MovieContainer.module.scss';

export const MovieContainer = ({ original_title, poster_path, id }) => {
    return (
        // <Link key={category.id} href={`/category/${category.id}-${category.name}`}>
        <Link className={style["movie-container"]} href={`/detail/${id}`} >
            <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                className={style["movie-img"]}
                alt={original_title}
            />
        </Link >
    )
}
