import {PROJECTS} from "../enums/Projects";
import { CategoryType } from "../reducers/types";

export const setFilterCategory = (category: CategoryType) => ({type: PROJECTS.SET_FILTER_FOR_PROJECT, category} as const)
export const setMoreProjects = () => ({type: PROJECTS.LOAD_MORE_PROJECTS} as const)
export const deleteProject = (id: number) => ({type: PROJECTS.DELETE_PROJECT, id} as const)