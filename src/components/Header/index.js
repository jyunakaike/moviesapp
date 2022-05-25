import React from 'react';
import style from './Header.module.scss'

export const Header = () => {
    return (
        <header id="header" className={style["header-container"]}>
            {/* <span className={style["header-arrow"]}>&lt;</span> */}
            <h1 className={style["header-title"]}>PlatziMovies</h1>
            {/* <h1 className={style["header-title header-title--categoryView inactive"]}>Acción</h1> */}

            <form id="searchForm" className={style["header-searchForm"]}>
                <input type="text" placeholder="Vengadores" />
                <button>🔍</button>
            </form>
        </header>
    )
}