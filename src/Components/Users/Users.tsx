import React from 'react';
import s from './Users.module.css'
import { usersType } from '../../redux/usersReducer';

type UsersPropsType = {
    users: usersType[]
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: usersType[]) => void
}

const Users = (props: UsersPropsType) => {
    
    
    return (
        <div>
            {props.users.map(item => {
                return <div key={item.id}>
                    <span>
                        <div>
                            <img src={item.photoURl} className={s.userphoto}/>
                        </div>
                        <div>
                            {
                                item.followed 
                                    ? <button onClick={ () => { props.unFollow(item.id)} }>Unfollow</button>
                                    : <button onClick={ () => { props.follow(item.id)} }>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                             <div>{item.fullname}</div>
                             <div>{item.status}</div>
                        </span>
                        <span>
                             <div>{item.location.country}</div>
                             <div>{item.location.city}</div>
                        </span>
                    </span>
                </div>
            })}
        </div>
    )
}

export default Users