import React, {useState} from 'react';
import style from './style/Projects.module.scss'
import {useAppSelector} from "../../../store/selectors";
import {projectsFilter, setFilterByCategory} from "../../../utils/projectsFilter";
import {useDispatch} from "react-redux";
import {deleteProject} from "../../../store/actions/projects";
import {currentWidthType} from "../../../common/types";

export const Projects = ({currentWindowDimensions}: currentWidthType) => {

    const dispatch = useDispatch()
    let projects = useAppSelector(state => state.projects.projects)
    let activeCategory = useAppSelector(state => state.projects.activeCategory)

    projects = projectsFilter(projects, activeCategory)

    const [projectId, setProjectId] = useState<number | null>(null);
    const [activeProject, setActiveProject] = useState<boolean>(false);

    const changeActiveProject = (id: number) => {
        if (currentWindowDimensions.width && currentWindowDimensions.width > 1040) {
            if (id === projectId) {
                setActiveProject(false)
                setProjectId(null)
            } else {
                setProjectId(id)
                setActiveProject(true)
            }
        }
    }

    const deleteProjectByPressKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Delete') {
            projectId && dispatch(deleteProject(projectId))
        }
    }

    return (
        <div className={style.projects__body}>

            {
                projects.map(project => {

                    const activeProjectClassName = (projectId === project.id && activeProject)
                        ? `${style.projects__project} ${style.projects__project_active}`
                        : style.projects__project

                    const handleFilterByCategory = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                        setFilterByCategory(dispatch, project.category)
                        e.stopPropagation()
                    }

                    return (
                        <div
                            key={project.id}
                            tabIndex={0}
                            className={activeProjectClassName}
                            onClick={() => changeActiveProject(project.id)}
                            onKeyDown={deleteProjectByPressKey}
                        >
                            <img src={project.image} alt="logo"/>
                            <div
                                onClick={handleFilterByCategory}
                            >
                                {project.category}
                            </div>
                            <h3>{project.title}</h3>
                        </div>
                    )
                })
            }

        </div>
    )
}