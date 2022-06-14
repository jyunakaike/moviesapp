import { useState, useEffect } from "react";
import { api } from "api";

export const getTrendingMoviesPreview = () => {
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