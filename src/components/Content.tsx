import React from 'react';
import {Main} from './main/Main';
import {Header} from './header/Header';
import style from './Content.module.scss'
import {useWindowDimensions} from "../hooks/useWindowDimensions";

export type parentRefType = HTMLDivElement

export const Content = () => {

    let currentWindowDimensions = useWindowDimensions()

    return (
        <div
            className={style.main__body}>

            <Header
                currentWindowDimensions={currentWindowDimensions}
            />

            <Main
                currentWindowDimensions={currentWindowDimensions}
            />

        </div>
    )
}