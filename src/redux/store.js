// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts:
//                 [
//                     {id: 1, message: 'Hi. how are you?', likesCount: 10},
//                     {id: 2, message: 'It\'s my first project', likesCount: 50},
//                     {id: 3, message: 'yohoooo', likesCount: 10},
//                     {id: 4, message: 'WTF', likesCount: 50}
//                 ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dmitriy'},
//                 {id: 2, name: 'Vasiliy'},
//                 {id: 3, name: 'Roman'},
//                 {id: 4, name: 'Gleb'},
//                 {id: 5, name: 'Boris'}
//             ],
//             messages:
//                 [
//                     {id: 1, message: 'Hi'},
//                     {id: 2, message: 'How are you?'},
//                     {id: 3, message: 'Not bad'},
//                     {id: 4, message: 'Where are you?'},
//                     {id: 5, message: 'I\'m at home'}
//
//                 ],
//             newMessageBody: ''
//         },
//         sidebar: {
//             sideFriendBlock:
//                 [
//                     {id: 1, name: 'Alex'},
//                     {id: 2, name: 'Lina'},
//                     {id: 3, name: 'Fatima'}
//                 ]
//         }
//     },
//
//     _callSubscribe() {
//         console.log('The state was changed')
//     },
//
//     getState() {
//         return this._state;
//     },
//
//     subscribe(observer) {
//         this._callSubscribe = observer; // observer
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscribe(this._state)
//     }
// }
//
// export default store;