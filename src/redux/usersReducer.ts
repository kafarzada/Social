import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type locationType = {
    country: string
    city: string
}
export type usersType = {
    id: string
    followed: boolean
    fullname: string
    photoURl: string
    status: string
    location: locationType
}

type UsersPageType = {
    users: Array<usersType>
};

let initialState:UsersPageType  = {
    users: [
        {id: v1(), followed: false, fullname: 'Dmitry', status: "I am a boss", 
                                photoURl:'https://ru.meming.world/images/ru/thumb/a/ab/%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D1%8F%D1%82%D1%8B%D0%B9_%D0%BA%D0%BE%D1%82_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD.jpg/300px-%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D1%8F%D1%82%D1%8B%D0%B9_%D0%BA%D0%BE%D1%82_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD.jpg', location: {country: "Russia", city: "Moscow"} },
        {id: v1(), followed: true, fullname: 'Pert', status: "I am a boss", 
                                photoURl:'https://ru.meming.world/images/ru/thumb/a/ab/%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D1%8F%D1%82%D1%8B%D0%B9_%D0%BA%D0%BE%D1%82_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD.jpg/300px-%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D1%8F%D1%82%D1%8B%D0%B9_%D0%BA%D0%BE%D1%82_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD.jpg', location: {country: "Russia", city: "Kazan"} },
        {id: v1(), followed: false, fullname: 'Max', status: "I am a boss",  
                                photoURl:'https://ru.meming.world/images/ru/thumb/a/ab/%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D1%8F%D1%82%D1%8B%D0%B9_%D0%BA%D0%BE%D1%82_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD.jpg/300px-%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D1%8F%D1%82%D1%8B%D0%B9_%D0%BA%D0%BE%D1%82_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD.jpg',location: {country: "France", city: "Paris"} }
    ]
};

export type ActionType = followActionType | unFollowActionType | SetUsersActionType;

const usersReducer = (state: UsersPageType = initialState, action:ActionType): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if(item.id === action.userId){
                        return {...item, followed: true}
                    } else {
                        return item
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if(item.id === action.userId){
                        return {...item, followed: false}
                    } else {
                        return item
                    }
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

type followActionType = {
    type: typeof  FOLLOW
    userId: string
};

type unFollowActionType = {
    type: typeof  UNFOLLOW
    userId: string
};
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<usersType>
};

export const followActionCreator = (id: string):followActionType => {
    return {
        type: FOLLOW,
        userId: id
    }
}

export const unFollowActionCreator = (id: string):unFollowActionType => {
    return {
        type: UNFOLLOW,
        userId: id
    }
}

export const SetUsersActionCreator = (users: Array<usersType>):SetUsersActionType => {
    return {
        type: SET_USERS,
        users: users
    }
}


export default  usersReducer