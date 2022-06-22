import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {AppActionType, AppStoreType} from "./types";
import {projectsReducer} from "./reducers/projects";

export let rootReducer = combineReducers({
    projects: projectsReducer
})
export const store: Store<AppStoreType, AppActionType> = createStore(rootReducer)