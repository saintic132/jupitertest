import React from 'react';
import style from './style/FilterBar.module.scss'
import {useDispatch} from "react-redux";
import {CategoryType} from "../../../store/reducers/types";
import {setFilterCategory} from "../../../store/actions/projects";


export const FilterBar = () => {

    let screenWidth = window.innerWidth
    const dispatch = useDispatch()

    const setFilterByCategory = (category: CategoryType) => {
        dispatch(setFilterCategory(category))
    }

    return (
        <div className={style.filterbar__body}>

            {
                (screenWidth && screenWidth > 1040)
                    ?
                    <ul>
                        <li
                            onClick={() => setFilterByCategory('All')}
                        >
                            Show All
                        </li>
                        <li
                            onClick={() => setFilterByCategory('Design')}
                        >
                            Design
                        </li>
                        <li
                            onClick={() => setFilterByCategory('Branding')}
                        >
                            Branding
                        </li>
                        <li
                            onClick={() => setFilterByCategory('Illustration')}
                        >
                            Illustration
                        </li>
                        <li
                            onClick={() => setFilterByCategory('Motion')}
                        >
                            Motion
                        </li>
                    </ul>

                    : <div>hello</div>
            }

        </div>
    )
}