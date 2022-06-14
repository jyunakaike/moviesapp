import React from 'react';

// components
import { MovieContainer } from 'components/MovieContainer';

// api
import axios from 'axios';
import { getRelatedMovieDetail } from 'hooks/useGetRelatedMovieDetail';

import style from './MovieDetail.module.scss'

const MovieDetail = ({ id, poster_path, original_title, overview, vote_average, genres }) => {
    const api = axios.create({
        baseURL: `https://api.themoviedb.org/3/`,
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            'api_key': process.env.NEXT_PUBLIC_API_KEY,
        }
    });

    const RelatedMovies = getRelatedMovieDetail(id);

    return (
        <section id="movieDetail" className={style["movieDetail-container"]}>
            <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                // className={style["movie-img"]}
                alt={original_title}
            />

            <h1 className={style["movieDetail-title"]}>{original_title}</h1>
            <span className={style["movieDetail-score"]}>{vote_average}</span>
            <p className={style["movieDetail-description"]}>
                {overview}
            </p>

            <article className={style["categories-list"]}>
                {
                    genres.map(genre => (
                        <div key={genre.id} className={style["category-container"]}>
                            <h3 id="id28" className={style["category-title"]}>{genre.name}</h3>
                        </div>
                    ))
                }
            </article>

            <article className={style["relatedMovies-container"]}>
                <h2 className={style["relatedMovies-title"]}>Películas similares</h2>
                <div className={style["relatedMovies-scrollContainer"]}>
                    {(RelatedMovies)
                        ?
                        RelatedMovies.results.map(RelatedMovie => (
                            <MovieContainer key={RelatedMovie.id} {...RelatedMovie} />
                        ))
                        : <h1>loading</h1>
                    }
                </div>
            </article>
        </section>
    )
}

export default MovieDetail  