import Link from 'next/link';
import React from 'react';
import { LoadingText } from 'components/Loading';

import style from './Categories.module.scss';
export const CategoriesContainer = ({ categories }) => {
    const loadingGenres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    return (
        <section id="categoriesPreview" className={style["categoriesPreview-container"]}>
            <h2 className={style["categoriesPreview-title"]}>Categorías</h2>
            <article className={style["categoriesPreview-list"]}>
                {
                    (categories)
                        ?
                        categories.genres.map(
                            category => (
                                <Link key={category.id} href={`/category/${category.id}-${category.name}`}>
                                    <div className={style["category-container"]}>
                                        <h3 id={`id${category.id}`} className={style["category-title"]}>{category.name}</h3>
                                    </div>
                                </Link>
                            )
                        )
                        : loadingGenres.map(
                            loadingGenre => ( 
                                <LoadingText key={loadingGenre } />
                            )
                        )
                }
            </article>
        </section>
    )
}
