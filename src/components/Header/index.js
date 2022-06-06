import React, { useRef } from 'react';

import style from './Header.module.scss';

export const Header = ({ setSearchValue }) => {
    const searchBarRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(searchBarRef.current);
        const search = formData.get('searchBar');
        setSearchValue(search);
    }

    return (
        <header id="header" className={style["header-container"]}>
            {/* <span className={style["header-arrow"]}>&lt;</span> */}
            <h1 className={style["header-title"]}>PlatziMovies</h1>
            {/* <h1 className={style["header-title header-title--categoryView inactive"]}>Acción</h1> */}

            <form ref={searchBarRef} id="searchForm" className={style["header-searchForm"]}  >
                <input type="text" placeholder="Vengadores" name="searchBar" />
                <button onClick={handleSubmit}  >🔍</button>
            </form>
        </header>
    )
}

