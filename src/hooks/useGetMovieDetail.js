import { useState, useEffect } from 'react'
import { api } from 'api';

export const useGetMovieDetail = (id) => {
    const [movie, setMovie] = useState();
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                // const { data } =await api(`/discover/movie?with_genres=${genresId}`)
                const { data } = await api(`/movie/${id}`)
                setMovie(data);
            }
            fetchData()
                .catch(console.error)
        }
    }, [id]);

    return movie
}
