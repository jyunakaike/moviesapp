import { useState, useEffect } from "react";
import { api } from "api";

export const getCategoriesPreview = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await api('genre/movie/list')
            setCategories(data);
        }
        fetchData()
            .catch(console.error)
    }, []);

    return categories
}