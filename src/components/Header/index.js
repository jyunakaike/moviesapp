import React, { useRef } from 'react';

import style from './Header.module.scss';

export const Header = ({ setSearchValue }) => {
    const searchBarRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(searchBarRef.current);
        const search = formData.get('searchBar');
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}`;
            const res = await fetch(url);
            const data = await res.json();
            setSearchValue(data);
        }
        catch (e) {
            console.log(e);
        }
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

