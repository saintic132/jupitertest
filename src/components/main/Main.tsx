import React from 'react';
import style from './style/Main.module.scss'
import {FilterBar} from "./filterbar/FilterBar";
import {Projects} from './projects/Projects';
import {Load} from './load/Load';
import {currentWidthType} from "../../common/types";

export const Main = ({currentWindowDimensions}: currentWidthType) => {

    return (
        <div className={style.content__body}>

            <FilterBar
                currentWindowDimensions={currentWindowDimensions}
            />

            <Projects
                currentWindowDimensions={currentWindowDimensions}
            />

            <Load/>

        </div>
    )
}