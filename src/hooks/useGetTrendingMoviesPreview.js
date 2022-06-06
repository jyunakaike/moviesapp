import { useState, useEffect } from "react";



// traditional fetch
// export const getTrendingMoviesPreview = (url , api_key) => {
//     const [trending, setTrending] = useState();
//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await fetch(url+`trending/movie/day`+api_key)
//             const data = await res.json();
//             setTrending(data);
//         }
//         fetchData()
//             .catch(console.error);
//     }, []);
//     return trending
// }


export const getTrendingMoviesPreview = (api) => {
        const [trending, setTrending] = useState();
        useEffect(() => {
            const fetchData = async () => {
                const {data} = await api('trending/movie/day');
                // const movies = data.results;

                // const res = await fetch(url+`trending/movie/day`+api_key)
                // const data = await res.json();
                setTrending(data);
            }
            fetchData()
                .catch(console.error);
        }, []);

        return trending


} 