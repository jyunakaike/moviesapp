import { useState, useEffect } from 'react'
// NOT COMPLETE

// export const useGetMoviesBySearch = (api, query) => {
export const useGetMoviesBySearch = async (query) => {
    const [searchMovie, setSearchMovie] = useState();
    // useEffect(() => {
    //     if (query) {
    //         const fetchData = async () => {
    //             const { data } = await api('search/movie', {
    //                 params: { query, },
    //             });
    //             setSearchMovie(data)
    //         }
    //         fetchData()
    //             .catch(console.error)
    //     }
    //     else{
    //         console.log('error');
    //     }
    // }, [])
    // return searchMovie
}
