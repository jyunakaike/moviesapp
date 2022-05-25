import React from 'react';
import style from './TrendingPreviewContainer.module.scss';


export const TrendingPreviewContainer = ({ children }) => {
    return (
        <section id="trendingPreview" className={style["trendingPreview-container"]}>
            <div className={style["trendingPreview-header"]}>
                <h2 className={style["trendingPreview-title"]}>Tendencias</h2>
                <button className={style["trendingPreview-btn"]}>Ver más</button>
            </div>

            <article className={style["trendingPreview-movieList"]}>
                {children}
            </article>
        </section>
    )
}
