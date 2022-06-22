import {CategoryType, ProjectType} from "../store/reducers/types";

export const projectsFilter = (projects: ProjectType[], activeCategory: CategoryType): ProjectType[] => {
    if (activeCategory === 'All') return projects
    return projects.filter(proj => proj.category === activeCategory)
}