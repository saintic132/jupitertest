import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import { projectsReducer } from "./reducers";
import {AppActionType, AppStoreType} from "./types";

export let rootReducer = combineReducers({
    projects: projectsReducer
})
export const store: Store<AppStoreType, AppActionType> = createStore(rootReducer)