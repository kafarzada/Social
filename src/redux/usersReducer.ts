

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

type locationType = {
    country: string
    city: string
}

type photoType = {
    small: string
    large: string
}
export type usersType = {
    id: string
    followed: boolean
    name: string
    photos: photoType
    status: string
    uniqueUrlName: string
}

type UsersPageType = {
    users: Array<usersType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
};

let initialState:UsersPageType  = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalUsersCount: 0,
    isFetching: false
};

export type ActionType = followActionType 
                        | unFollowActionType
                        | SetUsersActionType
                        | SetCurrentPageActionType
                        | setTotalUsersCountActionType
                        | ToggleIsFetchingActionType;

const usersReducer = (state: UsersPageType = initialState, action:ActionType): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            debugger
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
            debugger
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
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state,
                    currentPage: action.currentPage
            }
        
        case SET_TOTAL_USERS_COUNT:
            return {...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
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

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

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

export const SetCurrentPageActionCreator = (currentPage: number):SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const SetTotalUsersCountActionCreator = (totalUsersCount: number): setTotalUsersCountActionType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export const ToggleIsFetchingActionCreator = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}


export default  usersReducer