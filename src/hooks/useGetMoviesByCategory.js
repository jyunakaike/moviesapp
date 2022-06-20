import { useState, useEffect } from 'react'
import { api } from 'api';

export const useGetMoviesByCategory = (genresId, page) => {
    const [moviesByCategory, setMoviesByCategory] = useState();


    // if page === 1 get first api page
    // else get another page
    useEffect(() => {
        if (page === 1) {
            const fetchData = async () => {
                const { data } = await api(`/discover/movie`, {
                    params: {
                        with_genres: genresId
                    }
                })
                setMoviesByCategory(data.results);
            }
            fetchData()
                .catch(console.error)
        }
        else {
            const fetchData = async () => {
                const { data } = await api(`/discover/movie`, {
                    params: {
                        with_genres: genresId,
                        page: page
                    }
                })
                setMoviesByCategory(moviesByCategory.concat(data.results))
            }
            fetchData()
                .catch(console.error)
        }
    }, [page]);

    return moviesByCategory
}

