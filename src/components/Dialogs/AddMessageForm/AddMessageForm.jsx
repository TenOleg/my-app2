import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validator/valid";

const length = maxLengthCreator(20)

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'} validate={[required, length]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
