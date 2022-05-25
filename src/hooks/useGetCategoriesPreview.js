import { useState, useEffect } from "react";

// export const getCategoriesPreview = (url, api_key) => {
//     const [categories, setCategories] = useState();

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await fetch(url + `genre/movie/list` + api_key)
//             const data = await res.json();
//             setCategories(data);
//         }
//         fetchData()
//             .catch(console.error)
//     }, []);

//     return categories
// }

export const getCategoriesPreview = (api) => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } =await api('genre/movie/list')
            setCategories(data);
        }
        fetchData()
            .catch(console.error)
    }, []);

    return categories
}