import React, { useState, useEffect } from 'react';
import { Header } from 'components/Header';
import { TrendingPreviewContainer } from 'components/TrendingPreviewContainer';
import { MovieContainer } from 'components/MovieContainer';
import { CategoriesContainer } from 'components/CategoriesContainer';
import axios from 'axios';

// Custom hooks
import { getTrendingMoviesPreview } from 'hooks/useGetTrendingMoviesPreview';
import { getCategoriesPreview } from 'hooks/useGetCategoriesPreview';
// import { useGetMoviesBySearch } from 'hooks/useGetMoviesBySearch'


const Home = () => {
  // useState for searchFilter
  const [searchValue, setSearchValue] = useState()

  const api = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      'api_key': process.env.NEXT_PUBLIC_API_KEY,
    }
  });
  // api
  const trendings = getTrendingMoviesPreview(api)
  const categories = getCategoriesPreview(api)

  // const searchMovies = useGetMoviesBySearch(api, 'chihiro');
  // const searchMovies = useGetMoviesBySearch(api, searchValue);

  return (
    <div >
      <Header setSearchValue={setSearchValue} />
        {
          (searchValue)
            ?
            <TrendingPreviewContainer name={'Search'}>
              {searchValue.results.map(movie =>
                (<MovieContainer key={movie.id} {...movie} />)
              )}
            </TrendingPreviewContainer>
            : null
        }
      <TrendingPreviewContainer name={'Trendings'} >
        {
          (trendings)
            ?
            trendings.results.map(trending =>
              (<MovieContainer key={trending.id} {...trending} />)
            )
            : <h1>loading....</h1>
        }
      </TrendingPreviewContainer>
      <CategoriesContainer categories={categories} />
    </div>
  )
}

export default Home     