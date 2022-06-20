import { api } from "api";
import React, { useState, useEffect } from "react";

export const useGetMoviesBySearch = ( query, setSearchData) => {
    const fetchData = async () => {
        const { data } = await api('search/movie', {
            params: { query, },
        });
        setSearchData(data)
    }
    fetchData()
        .catch(console.error)
}

// export const useGetMoviesBySearch = (value) => {
//     const [search, setSearch] = useState();
//     useEffect(() => {
//         const fetchData = async () => {
//             const { data } = await api('search/movie', {
//                 params: { value, },
//             });
//             setSearch(data)
//         }
//         fetchData()
//             .catch(console.error)

//         // if (value) {
//         //     const fetchData = async () => {
//         //         const { data } = await api('search/movie', {
//         //             params: { value, },
//         //         });
//         //         setSearch(data)
//         //     }
//         //     fetchData()
//         //         .catch(console.error)

//         //     console.log('cambio el value' + value);
//         // }
//         // else {
//         //     console.log('error')
//         // }
//     }, [value]);
//     return search
// }
