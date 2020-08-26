import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import {
    ActionType,
    followActionCreator,
    SetUsersActionCreator,
    unFollowActionCreator,
    usersType,
    SetCurrentPageActionCreator,
    SetTotalUsersCountActionCreator,
    ToggleIsFetchingActionCreator
} from "../../redux/usersReducer";
import axios from 'axios'
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';



type UsersComponentPropsType = {
    users: usersType[]
    totalUsersCount:number
    pageSize: number
    currentPage: number
    isFetching: boolean
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: usersType[]) => void 
    setCurrentPage: (currentPage:number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching:boolean) => void
}

class UsersContainer extends React.Component <UsersComponentPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`) 
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChange = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`) 
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> : null}
           <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                users={this.props.users}
                
           />
           </>
        )
    }
}


const mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow: followActionCreator,
    unFollow: unFollowActionCreator,
    setUsers: SetUsersActionCreator,
    setCurrentPage: SetCurrentPageActionCreator,
    setTotalUsersCount: SetTotalUsersCountActionCreator,
    toggleIsFetching: ToggleIsFetchingActionCreator

})(UsersContainer) 