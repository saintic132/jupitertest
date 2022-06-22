import React, {ChangeEvent} from 'react';
import style from './style/FilterBar.module.scss'
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../store/selectors";
import {setFilterByCategory} from '../../../utils/projectsFilter';
import {CategoryType} from "../../../store/reducers/types";
import {currentWidthType} from "../../../common/types";

export const FilterBar = ({currentWindowDimensions}: currentWidthType) => {

    const dispatch = useDispatch()

    const activeCategory = useAppSelector(state => state.projects.activeCategory)

    const handleFilterByCategory = (category: CategoryType) => {
        setFilterByCategory(dispatch, category)
    }

    const handleSelectFilterByCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterByCategory(dispatch, e.currentTarget.value as CategoryType)
    }

    return (
        <div
            className={style.filterbar__body}
        >

            {
                currentWindowDimensions.width && currentWindowDimensions.width > 1040
                    ? <ul>
                        <li
                            className={activeCategory === 'All' ? style.filterbar__active : ''}
                            onClick={() => handleFilterByCategory('All')}
                        >
                            Show All
                        </li>
                        <li
                            className={activeCategory === 'Design' ? style.filterbar__active : ''}
                            onClick={() => handleFilterByCategory('Design')}
                        >
                            Design
                        </li>
                        <li
                            className={activeCategory === 'Branding' ? style.filterbar__active : ''}
                            onClick={() => handleFilterByCategory('Branding')}
                        >
                            Branding
                        </li>
                        <li
                            className={activeCategory === 'Illustration' ? style.filterbar__active : ''}
                            onClick={() => handleFilterByCategory('Illustration')}
                        >
                            Illustration
                        </li>
                        <li
                            className={activeCategory === 'Motion' ? style.filterbar__active : ''}
                            onClick={() => handleFilterByCategory('Motion')}
                        >
                            Motion
                        </li>
                    </ul>

                    : <div className={style.filterbar__select}>
                        <select
                            value={activeCategory}
                            onChange={handleSelectFilterByCategory}
                        >
                            <option value="All">Show All</option>
                            <option value="Design">Design</option>
                            <option value="Branding">Branding</option>
                            <option value="Illustration">Illustration</option>
                            <option value="Motion">Motion</option>
                        </select>
                    </div>

            }

        </div>
    )
}