import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers);


export default store