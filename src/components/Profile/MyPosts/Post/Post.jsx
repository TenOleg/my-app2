import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src={'https://i.stack.imgur.com/BRryU.jpg'}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;