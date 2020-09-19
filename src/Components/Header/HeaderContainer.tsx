import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {SetUserDataActionCreator,  authUserData } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import axios from 'axios'

type HeaderComponentPropsType = {
    data: authUserData
    isAuth: boolean
    setAutoUserData: (data: authUserData) => void
}

class HeaderContainer extends React.Component  <HeaderComponentPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true,
            headers: {
                'API-KEY': 'e8a9d0c3-7037-4553-b754-e3de2b89a09a'
            }
        }).then(response => {
            if(response.data.resultCode === 0) {
                this.props.setAutoUserData(response.data.data)
            }
        })
    }

    render() {
        return( <Header login={this.props.data.login} isAuth={this.props.isAuth}/>)
    }
}


const mapStateToProps  = (state: AppStateType) => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {
    setAutoUserData: SetUserDataActionCreator
})(HeaderContainer)