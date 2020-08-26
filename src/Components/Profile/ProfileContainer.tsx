import React from 'react';
import Profile from './Profile';
import axios from 'axios'
import { connect } from 'react-redux';
import { RootStateType, ProfileType } from '../../redux/state';
import { setUserProfileActionCreator } from '../../redux/profile-reducer';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type PathParamType = {
    userId:string
}

type ProfileComponentPropsType  =  RouteComponentProps<PathParamType> & {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}

class  ProfileContainer extends React.Component<ProfileComponentPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`) 
        .then(response => {
            debugger
            this.props.setUserProfile(response.data)
        })
    }
    
    render() {
        return <Profile profile={this.props.profile} />
    }
};



const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile: setUserProfileActionCreator
})(WithUrlDataContainerComponent);