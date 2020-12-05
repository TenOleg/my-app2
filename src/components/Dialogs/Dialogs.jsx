import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = React.memo(props => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElements = [...state.messages].reverse().map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
})

export default Dialogs;