import {setFilterCategory, setMoreProjects} from "../projects";

export type ActionsProjectsType =
    ReturnType<typeof setFilterCategory>
    | ReturnType<typeof setMoreProjects>