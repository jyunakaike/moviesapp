import React, { useState, useEffect, useRef } from 'react';
import { Header } from 'components/Header';
import { TrendingPreviewContainer } from 'components/TrendingPreviewContainer';
import { MovieContainer } from 'components/MovieContainer';
import { CategoriesContainer } from 'components/CategoriesContainer';
import axios from 'axios';

// loading 
import { Loading } from 'components/Loading';
// Custom hooks
import { getTrendingMoviesPreview } from 'hooks/useGetTrendingMoviesPreview';
import { getCategoriesPreview } from 'hooks/useGetCategoriesPreview';
import { useGetMoviesBySearch } from 'hooks/useGetMoviesBySearch'


const Home = () => {
  // useState for searchFilter 
  // value = Data from input, 
  // data  = api result ,
  const [searchValue, setSearchValue] = useState()
  const [searchData, setSearchData] = useState()

  // api
  const api = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      'api_key': process.env.NEXT_PUBLIC_API_KEY,
    }
  });
  const trendings = getTrendingMoviesPreview(api)
  const categories = getCategoriesPreview(api)

  // search render  
  useEffect(() => {
    if (searchValue) {
      useGetMoviesBySearch(api, searchValue, setSearchData)
      // console.log(searchData)
    }
  }, [searchValue])

  return (
    <div >
      <Header setSearchValue={setSearchValue} />
      {
        (searchData)
          ?
          <TrendingPreviewContainer name={'Search'}>
            {searchData.results.map(movie =>
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
            : <Loading />
        }
      </TrendingPreviewContainer>
      <CategoriesContainer categories={categories} />
    </div>
  )
}

export default Home     