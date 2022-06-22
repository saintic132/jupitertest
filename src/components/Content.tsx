import React from 'react';
import { Main } from './main/Main';
import { Header } from './header/Header';
import style from './Content.module.scss'

export const Content = () => {
    return (
        <div className={style.main__body}>
            <Header />
            <Main />
        </div>
    )
}