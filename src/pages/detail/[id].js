import React from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import axios from 'axios';
import { useGetMovieDetail } from 'hooks/useGetMovieDetail';

// components
import MovieDetail from 'components/MovieDetail';

const detail = () => {
    const {
        query: { id },
    } = useRouter();

    const api = axios.create({
        baseURL: `https://api.themoviedb.org/3/`,
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            'api_key': process.env.NEXT_PUBLIC_API_KEY,
        }
    })
    const movie = useGetMovieDetail(api, id);

    return (
        <>
            {
                (movie)
                    ?
                    // <div>movie Detail{movie.original_title}</div>
                    <MovieDetail  {...movie}/>
                    :
                    <div>loading</div>}
        </>
    )
}


export default detail