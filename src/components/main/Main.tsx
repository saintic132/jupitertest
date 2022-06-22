import React from 'react';
import style from './style/Main.module.scss'
import {FilterBar} from "./filterbar/FilterBar";
import { Projects } from './projects/Projects';
import { Load } from './load/Load';

export const Main = () => {
    return (
        <div className={style.content__body}>
            <FilterBar/>
            <Projects />
            <Load />
        </div>
    )
}