import { useState, useEffect } from 'react'

export const useGetMoviesByCategory = (api, genresId) => {
    const [moviesByCategory, setMoviesByCategory] = useState();

    useEffect(() => {
        const fetchData = async () => {
            // const { data } =await api(`/discover/movie?with_genres=${genresId}`)
            const { data } = await api(`/discover/movie`, {
                params: {
                    with_genres: genresId
                }
            })
            setMoviesByCategory(data);
        }
        fetchData()
            .catch(console.error)
    }, []);

    return moviesByCategory
}
