import { rootReducer } from "../store"
import {ActionsProjectsType} from "../actions/types";

export type AppStoreType = ReturnType<typeof rootReducer>
export type AppActionType = ActionsProjectsType