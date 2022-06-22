import React from 'react';
import style from './style/Projects.module.scss'
import {useAppSelector} from "../../../store/selectors";
import {projectsFilter} from "../../../utils/projectsFilter";

export const Projects = () => {

    let projects = useAppSelector(state => state.projects.projects)
    let activeCategory = useAppSelector(state => state.projects.activeCategory)

    projects = projectsFilter(projects, activeCategory)

    return (
        <div className={style.projects__body}>

            {
                projects.map(project => {
                    return (
                        <div
                            key={project.id}
                            className={style.projects__project}
                        >
                            <img src={project.image} alt="logo"/>
                            <h3>{project.title}</h3>
                        </div>
                    )
                })
            }

        </div>
    )
}