import { useState, useEffect } from "react";
import { api } from "api";

export const getTrendingMoviesPreview = (page) => {
    const [trending, setTrending] = useState();
    useEffect(() => {
        if (!trending) {
            const fetchData = async () => {
                const { data } = await api('trending/movie/day');
                setTrending(data.results);
            }
            fetchData()
                .catch(console.error);
        }
        else {
            const fetchData = async () => {
                const { data } = await api('trending/movie/day', { params: { page, } });
                setTrending(trending.concat(data.results));
            }
            fetchData()
                .catch(console.error);
        }

    }, [page]);
    return trending
}
