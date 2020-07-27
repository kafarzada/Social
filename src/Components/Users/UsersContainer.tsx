import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import {
    ActionType,
    followActionCreator,
    SetUsersActionCreator,
    unFollowActionCreator,
    usersType
} from "../../redux/usersReducer";

import Users from './Users';


const mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users
    }
}


const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (id: string) => {
            dispatch(followActionCreator(id))
        },

        unFollow: (id: string) => {
            dispatch(unFollowActionCreator(id))
        },

        setUsers: (users: Array<usersType>) => {
            dispatch(SetUsersActionCreator(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users) 