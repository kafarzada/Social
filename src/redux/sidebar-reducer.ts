import {SidebarType } from './state';
import { ActionType } from './profile-reducer';

let initialState:SidebarType = {}
const sidebarReducer = (state: SidebarType = initialState, action:ActionType) => {

    return state
}

export default sidebarReducer;