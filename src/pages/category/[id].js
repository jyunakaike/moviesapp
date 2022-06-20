import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { useGetMoviesByCategory } from 'hooks/useGetMoviesByCategory';
import { getCategoriesPreview } from 'hooks/useGetCategoriesPreview';

import { MovieContainer } from 'components/MovieContainer';

const CategoryItem = () => {
    // useRouter
    const {
        query: { id },
    } = useRouter();

    // useState
    const [categoryId, categoryName] = []
    const [page, setPage] = useState(1)

    // get only id 
    if (id) {
        [categoryId, categoryName] = id.split('-');
    }

    // initial useEffect
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    // get movies of useGetMoviesByCategory api 
    const movies = useGetMoviesByCategory(categoryId, page);

    // for validation the id
    const validate = getCategoriesPreview()
    if (validate) {
        const validate2 = validate.genres
            .some(movie => movie.id.toString() === categoryId && movie.name === categoryName)
        if (!validate2) {
            return <Error statusCode={404} />
        }
    }

    //  handleScroll funtion return true if scroll is in the bottom
    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target.documentElement
        console.log(scrollTop, clientHeight, scrollHeight);
        if (scrollTop + clientHeight >= scrollHeight-10) {
            setPage(page ++ )
            console.log('true');
        }
    }

    return (
        <div style={{ margin: "0.1rem" }} >
            <h1 style={{ marginBottom: "1rem" }} >{categoryName}</h1>
            {
                (movies)
                    ? movies.map(movie =>
                        <MovieContainer key={movie.id} {...movie} />
                    )
                    : <p> loading</p>
            }
        </div>
    )
}

export default CategoryItem