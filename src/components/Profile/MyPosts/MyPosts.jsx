import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/valid";
import {Textarea} from "../../common/FormsControl/FormsControl";

const length = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    let postsElements = [...props.posts].reverse().map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'Enter your post'}
                       validate={[required, length]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


export default MyPosts;