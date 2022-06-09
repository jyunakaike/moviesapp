import { useState, useEffect } from "react";

export const getRelatedMovieDetail = (api , id) => {
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
