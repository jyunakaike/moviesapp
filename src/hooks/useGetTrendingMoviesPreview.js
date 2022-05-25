import { useState, useEffect } from "react";

const url = `https://api.themoviedb.org/3/`
const api_key =`?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;


export const getTrendingMoviesPreview = () => {
    const [trending, setTrending] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url+`trending/movie/day`+api_key)
            const data = await res.json();
            setTrending(data);
        }
        fetchData()
            .catch(console.error);
    }, []);

    return trending
}

