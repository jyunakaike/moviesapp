import React from 'react';
import style from './Categories.module.scss'

export const CategoriesContainer = ({ categories }) => {
    return (
        <section id="categoriesPreview" className={style["categoriesPreview-container"]}>
            <h2 className={style["categoriesPreview-title"]}>Categorías</h2>
            <article className={style["categoriesPreview-list"]}>
                {
                    (categories)
                        ?
                        categories.genres.map(
                            category => (
                                
                                <div key={category.id} className={style["category-container"]}>
                                    <h3 id={`id${category.id}`} className={style["category-title"]}>{category.name}</h3>
                                </div>
                            )
                        )
                        : <h1> loading </h1>
                }
            </article>
        </section>
    )
}
