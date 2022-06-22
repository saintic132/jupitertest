import {CategoryType, ProjectType} from "../store/reducers/types";
import {setFilterCategory} from "../store/actions/projects";
import {Dispatch} from "redux";


export const setFilterByCategory = (dispatch: Dispatch, category: CategoryType) => {
    dispatch(setFilterCategory(category))
}

export const projectsFilter = (projects: ProjectType[], activeCategory: CategoryType): ProjectType[] => {
    if (activeCategory === 'All') return projects
    return projects.filter(proj => proj.category === activeCategory)
}