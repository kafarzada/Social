import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from "./usersReducer";
import auth_reducer from './auth-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: auth_reducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers);

// @ts-ignore
window.store = store

export default store