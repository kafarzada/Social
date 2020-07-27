import React from 'react';
import s from './Users.module.css'
import { usersType } from '../../redux/usersReducer';
import axios from 'axios'
import userPhoto from './../../assets/images/user-img.png'

type UsersPropsType = {
    users: usersType[]
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: usersType[]) => void
}

class Users extends React.Component <UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        
        axios.get('https://social-network.samuraijs.com/api/1.0/users') 
        .then(response => {
            this.props.setUsers(response.data.items)
            
        })
    }

  

    
    
    render() {
        return (
            <div>
            {this.props.users.map(item => {
                return <div key={item.id}>
                    <span>
                        <div>
                            <img src={ item.photos.small != null ? item.photos.small : userPhoto } className={s.userphoto}/>
                        </div>
                        <div>
                            {
                                item.followed 
                                    ? <button onClick={ () => { this.props.unFollow(item.id)} }>Unfollow</button>
                                    : <button onClick={ () => { this.props.follow(item.id)} }>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                             <div>{item.name}</div>
                             <div>{item.status}</div>
                        </span>
                        <span>
                             <div>{"item.location.country"}</div>
                             <div>{"item.location.city"}</div>
                        </span>
                    </span>
                </div>
            })}
        </div>
        )
    }
}
export default Users