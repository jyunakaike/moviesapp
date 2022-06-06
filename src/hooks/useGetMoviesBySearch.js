
export const useGetMoviesBySearch = (api, query, setSearchData) => {
    const fetchData = async () => {
        const { data } = await api('search/movie', {
            params: { query, },
        });
        setSearchData(data)
    }
    fetchData()
        .catch(console.error)
}
