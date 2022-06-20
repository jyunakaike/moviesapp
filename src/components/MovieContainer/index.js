import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';

import style from './MovieContainer.module.scss';

export const MovieContainer = ({ original_title, poster_path, id }) => {
    const element = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        // console.log(element)
        const observer = new window.IntersectionObserver((entries) => {
            const { isIntersecting } = entries[0]
            // console.log(isIntersecting)
            if (isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        })
        observer.observe(element.current)
    }, [element])

    return (
        // <Link key={category.id} href={`/category/${category.id}-${category.name}`}>
        <div className={style["movie-container"]} ref={element}>
            {
                show &&
                <Link href={`/detail/${id}`}>
                    {
                        (poster_path)
                            ?
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                                className={style["movie-img"]}
                                alt={original_title}
                            />
                            : 
                            <div className={style["movie-notimg"]}>{ original_title} </div>
                    }


                </Link >

            }

        </div>
    )
}
