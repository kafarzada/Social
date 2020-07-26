import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { ActionType } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';



let mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispachToProps = (dispatch: (action: ActionType) => void) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispachToProps)(Dialogs)


export default DialogsContainer;