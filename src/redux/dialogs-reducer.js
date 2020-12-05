let SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Vasiliy'},
        {id: 3, name: 'Roman'},
        {id: 4, name: 'Gleb'},
        {id: 5, name: 'Boris'}
    ],
    messages:
        [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Not bad'},
            {id: 4, message: 'Where are you?'},
            {id: 5, message: 'I\'m at home'}

        ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;