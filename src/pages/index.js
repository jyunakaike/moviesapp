import React, { useState, useEffect, useRef } from 'react';
import { Header } from 'components/Header';
import { TrendingPreviewContainer } from 'components/TrendingPreviewContainer';
import { MovieContainer } from 'components/MovieContainer';
import { CategoriesContainer } from 'components/CategoriesContainer';
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

  // page for trend search
  const [trend, setTrend] = useState(1)
  const [searchPagination, setSearchPagination] = useState(1)


  const trendings = getTrendingMoviesPreview(trend)
  const categories = getCategoriesPreview()
  // const searchData = useGetMoviesBySearch(searchValue , searchPagination)
  // const searchData = useGetMoviesBySearch(searchValue )

  // console.log(searchData);
  // console.log(trend);
  // search render  

  useEffect(() => {
    if (searchValue) {
      useGetMoviesBySearch(searchValue, setSearchData)
    }
  }, [searchValue])


  const handleClickTrend = () => {
    setTrend(trend+1)
  }
  const handleClickSearch = () => {
    setSearchPagination(searchPagination+1)
  }

  return (
    <div >
      <Header setSearchValue={setSearchValue} />
      {
        (searchData)
          ?
          <TrendingPreviewContainer name={'Search'} handleClick = {handleClickSearch}  >
            {searchData.results.map(movie =>
              (<MovieContainer key={movie.id} {...movie} />)
            )}
          </TrendingPreviewContainer>
          : null
      }
      {
        (trendings)
          ?
          <TrendingPreviewContainer name={'Trendings'} handleClick={handleClickTrend} >
            {trendings.map(trending =>
              (<MovieContainer key={trending.id} {...trending} />)
            )}
          </TrendingPreviewContainer>
          : <Loading />
      }
      <CategoriesContainer categories={categories} />
    </div>
  )
}

export default Home     