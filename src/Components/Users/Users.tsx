import React from 'react';
import s from './Users.module.css'
import { usersType } from '../../redux/usersReducer';
import userPhoto from './../../assets/images/user-img.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (p: number) => void
    unFollow: (id: string) => void
    follow: (id: string) => void
    users: usersType[]
}   

const Users = (props:UsersPropsType) => {
    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize )
    let pages =[];
    
    for(let i = 1; i<= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
        <div className={s.pagesRow}>
        {pages.map(p => {
            return <span className={props.currentPage === p ? s.selectedPage: ''}
                    onClick={ () => props.onPageChange(p) }
                    >{p}</span>
        })}
        </div>


    {props.users.map(item => {
        return <div key={item.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${item.id}`}>
                    <img src={ item.photos.small != null ? item.photos.small : userPhoto } className={s.userphoto}/>
                    </NavLink>
                </div>
                <div>
                    {
                        item.followed 
                            ? <button onClick={ () => {
                                axios.delete( `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,{
                                    withCredentials:true,
                                    headers: {
                                        'API-KEY': 'e8a9d0c3-7037-4553-b754-e3de2b89a09a'
                                    }
                                    }).then(
                                        response => {
                                            if(response.data.resultCode === 0) {
                                                debugger
                                                props.unFollow(item.id)
                                            }
                                        }
                                )

                                } }>Unfollow</button>
                            : <button onClick={ () => { 
                                axios.post( `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,{}, {
                                    withCredentials:true,
                                    headers: {
                                        'API-KEY': 'e8a9d0c3-7037-4553-b754-e3de2b89a09a'
                                    }
                                    }).then(
                                        response => {
                                            if(response.data.resultCode === 0) {
                                                debugger
                                                props.follow(item.id)
                                            }
                                        }
                                )

                             } }>Follow</button>
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

export default Users