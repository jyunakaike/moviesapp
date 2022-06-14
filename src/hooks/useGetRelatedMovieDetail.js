import { useState, useEffect } from "react";
import { api } from "api";

export const getRelatedMovieDetail = (id) => {
        const [relatedMovieDetail, setRelatedMovieDetail] = useState();
        useEffect(() => {
            const fetchData = async () => {
                const {data} = await api(`movie/${id}/recommendations`);
                setRelatedMovieDetail(data);
            }
            fetchData()
                .catch(console.error);
        }, [id]);

        return relatedMovieDetail
} 
