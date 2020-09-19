const SET_USER_DATE = 'SET_USER_DATE'

export type authUserData = {
    id: string
    email: string
    login: string
}

export type AuthReducerStateType = {
    data: authUserData
    isAuth: boolean
}

let initialState :AuthReducerStateType = {
    data: {
        id: '2',
        email: 'blabla@bla.bla',
        login: 'samurai',
    },
    isAuth: false
}



type ActionType = SetUserDataActionType

const auth_reducer = (state: AuthReducerStateType = initialState, action: ActionType):AuthReducerStateType  => {
    switch(action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                data: {
                    ...action.data
                },
                isAuth: true
            }
        default:
            return state
    }
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATE
    data: authUserData
}


export const SetUserDataActionCreator = (data: authUserData) :SetUserDataActionType => {
    return {
        type: SET_USER_DATE,
        data: data
    }
}
export default auth_reducer