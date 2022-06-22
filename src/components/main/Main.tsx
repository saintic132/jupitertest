import React from 'react';
import style from './style/Main.module.scss'
import {FilterBar} from "./filterbar/FilterBar";

export const Main = () => {
    return (
        <div className={style.content__body}>
            <FilterBar/>

        </div>
    )
}