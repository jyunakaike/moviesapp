import React, { useEffect } from 'react';
import { Header } from 'components/Header';
import { TrendingPreviewContainer } from 'components/TrendingPreviewContainer';
import { MovieContainer } from 'components/MovieContainer';
import { CategoriesContainer } from 'components/CategoriesContainer';

// Custom hooks
import { getTrendingMoviesPreview } from 'hooks/useGetTrendingMoviesPreview';
import { getCategoriesPreview } from 'hooks/useGetCategoriesPreview';


const Home = () => {
  const trendings = getTrendingMoviesPreview()
  const categories = getCategoriesPreview()
  // console.log(categories  )



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