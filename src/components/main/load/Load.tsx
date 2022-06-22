import React from 'react';
import style from './style/Load.module.scss'
import {useDispatch} from "react-redux";
import {setMoreProjects} from "../../../store/actions/projects";

export const Load = () => {

    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(setMoreProjects())
    }

    return (
        <div className={style.load__body}>
            <button onClick={onClick}>
                load more
            </button>
        </div>
    )
}