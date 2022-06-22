import React from 'react';
import style from './style/FilterBar.module.scss'


export const FilterBar = () => {
    return (
        <div className={style.filterbar__body}>
            <ul>
                <li>Show All</li>
                <li>Design</li>
                <li>Branding</li>
                <li>Illustration</li>
                <li>Motion</li>
            </ul>
        </div>
    )
}