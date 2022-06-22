import {TypedUseSelectorHook, useSelector} from "react-redux";
import {combineReducers, legacy_createStore as createStore, Store} from "redux";

let rootReducer = combineReducers({})

export const store: Store<AppStoreType, AppActionType> = createStore(rootReducer)

export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector


export type AppStoreType = ReturnType<typeof rootReducer>
export type AppActionType = any
