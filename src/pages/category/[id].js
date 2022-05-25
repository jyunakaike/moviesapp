import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import axios from 'axios';
import { useGetMoviesByCategory } from 'hooks/useGetMoviesByCategory';
import { getCategoriesPreview } from 'hooks/useGetCategoriesPreview';

import { MovieContainer } from 'components/MovieContainer';

const CategoryItem = () => {
    const {
        query: { id },
    } = useRouter();
    const [categoryId, categoryName] = []
    if (id) {
        [categoryId, categoryName] = id.split('-');

    }

    const api = axios.create({
        baseURL: `https://api.themoviedb.org/3/`,
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            'api_key': process.env.NEXT_PUBLIC_API_KEY,
        }
    });

    const movies = useGetMoviesByCategory(api, categoryId);

    const validate = getCategoriesPreview(api)
    if (validate) {
        const validate2 = validate.genres
            .some(movie => movie.id.toString() === categoryId && movie.name === categoryName)
        if (!validate2) {
            return <Error statusCode={404} />
        }
    }

    return (
        <div style={{ margin: "0.1rem" }} >
            {categoryId}
            <h1 style={{ marginBottom: "1rem" }} >{categoryName}</h1>
            {
                (movies)
                    ? movies.results.map(movie =>
                        <MovieContainer key={movie.id} {...movie} />
                    )
                    : <p> loading</p>
            }
        </div>
    )
}

export default CategoryItem