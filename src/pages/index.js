import React, { useEffect } from 'react';
import { Header } from 'components/Header';
import { TrendingPreviewContainer } from 'components/TrendingPreviewContainer';
import { MovieContainer } from 'components/MovieContainer';
import { CategoriesContainer } from 'components/CategoriesContainer';
import axios from 'axios';

// Custom hooks
import { getTrendingMoviesPreview } from 'hooks/useGetTrendingMoviesPreview';
import { getCategoriesPreview } from 'hooks/useGetCategoriesPreview';


const Home = () => {
  // traditional fetch
  // const url = `https://api.themoviedb.org/3/`
  // const api_key = `?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  // using axios 
  const api = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      'api_key': process.env.NEXT_PUBLIC_API_KEY,
    }
  });

  // const trendings = getTrendingMoviesPreview(url, api_key)
  // const categories = getCategoriesPreview(url, api_key)

  // for axios function 
  const trendings = getTrendingMoviesPreview(api)
  const categories = getCategoriesPreview(api)

  return (
    <div >
      <Header />
      <TrendingPreviewContainer >
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