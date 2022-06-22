import {initialProjectsStateType} from "./types";
import Sofa from '../../assets/img/project/Sofa.png'
import KeyBoard from '../../assets/img/project/KeyBoard.png'
import Work_Media from '../../assets/img/project/Work_Media.png'
import DDDone from '../../assets/img/project/DDDone.png'
import Abstract from '../../assets/img/project/Abstract.png'
import HandP from '../../assets/img/project/HandP.png'
import Architect from '../../assets/img/project/Architect.png'
import CalC from '../../assets/img/project/CalC.png'
import Sport from '../../assets/img/project/Sport.png'
import {ActionsProjectsType} from "../actions/types";
import {PROJECTS} from "../enums/Projects";

const initialProjectsState: initialProjectsStateType = {
    projects: [
        {id: 1, category: 'Design', title: 'SOFA', image: Sofa},
        {id: 2, category: 'Branding', title: 'KeyBoard', image: KeyBoard},
        {id: 3, category: 'Illustration', title: 'Work Media', image: Work_Media},
        {id: 4, category: 'Motion', title: 'DDDone', image: DDDone},
        {id: 5, category: 'Design', title: 'Abstract', image: Abstract},
        {id: 6, category: 'Branding', title: 'HandP', image: HandP},
        {id: 7, category: 'Motion', title: 'Architect', image: Architect},
        {id: 8, category: 'Design', title: 'CalC', image: CalC},
        {id: 9, category: 'Branding', title: 'Sport', image: Sport},
    ],
    activeCategory: 'All'
}

export const projectsReducer = (state: initialProjectsStateType = initialProjectsState, action: ActionsProjectsType): initialProjectsStateType => {
    switch (action.type) {
        case PROJECTS.SET_FILTER_FOR_PROJECT: {
            return {
                ...state,
                activeCategory: action.category
            }
        }
        case PROJECTS.LOAD_MORE_PROJECTS: {
            return {
                ...state,
                projects: [
                    ...state.projects,
                    ...state.projects
                        .slice(-9)
                        .map(proj => ({
                        ...proj, id: proj.id + 9, title: proj.title + 1
                    }))
                ]
            }
        }
        case PROJECTS.DELETE_PROJECT: {
            return {
                ...state,
                projects: state.projects.filter(proj => proj.id !== action.id)
            }
        }
        default:
            return state
    }
}