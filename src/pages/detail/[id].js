import React from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { useGetMovieDetail } from 'hooks/useGetMovieDetail';

// components
import MovieDetail from 'components/MovieDetail';

const detail = () => {
    const {
        query: { id },
    } = useRouter();
    
    const movie = useGetMovieDetail(id);

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