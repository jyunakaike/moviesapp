import React from 'react';
import { Header } from 'components/Header';

const movie = () => {
    return (
        <>
            <Header></Header>
            {/* <section id="genericList" class="genericList-container inactive">
                <div class="movie-container">
                    <img
                        src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                        class="movie-img"
                        alt="Nombre de la película"
                    />
                </div>

                <div class="movie-container">
                    <img
                        src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                        class="movie-img"
                        alt="Nombre de la película"
                    />
                </div>

                <div class="movie-container">
                    <img
                        src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                        class="movie-img"
                        alt="Nombre de la película"
                    />
                </div>
            </section> */}

            <section id="movieDetail" class="movieDetail-container inactive">
                <h1 class="movieDetail-title">Deadpool</h1>
                <span class="movieDetail-score">7.6</span>
                <p class="movieDetail-description">
                    Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.
                </p>

                <article class="categories-list">
                    <div class="category-container">
                        <h3 id="id28" class="category-title">Romance</h3>
                    </div>

                    <div class="category-container">
                        <h3 id="id16" class="category-title">Drama</h3>
                    </div>

                    <div class="category-container">
                        <h3 id="id14" class="category-title">Acción</h3>
                    </div>
                </article>

                <article class="relatedMovies-container">
                    <h2 class="relatedMovies-title">Películas similares</h2>

                    <div class="relatedMovies-scrollContainer">
                        <div class="movie-container">
                            <img
                                src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                                class="movie-img"
                                alt="Nombre de la película"
                            />
                        </div>

                        <div class="movie-container">
                            <img
                                src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                                class="movie-img"
                                alt="Nombre de la película"
                            />
                        </div>

                        <div class="movie-container">
                            <img
                                src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg"
                                class="movie-img"
                                alt="Nombre de la película"
                            />
                        </div>
                    </div>
                </article>
            </section>

        </>
    )
}

export default movie