import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return ({
        dialogsPage: state.dialogsPage
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    })
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
