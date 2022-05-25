import { useState, useEffect } from "react";

const url = `https://api.themoviedb.org/3/`
const api_key =`?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

export const getCategoriesPreview = () => {
    const [categories, setCategories] = useState();
    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(url+`genre/movie/list`+api_key)
            const data = await res.json();
            setCategories(data);
        }
        fetchData()
        .catch(console.error)
    }, []);

    return categories
}