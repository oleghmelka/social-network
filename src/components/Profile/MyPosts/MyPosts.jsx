import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {

    let postsElements = props.posts.map ( element => <Post message={element.message}  likesCount={element.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
       // props.addPostInState();
       props.dispatch( addPostActionCreator() );
    }
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        let action = updateNewPostTextActionCreator(text);
        props.dispatch( action );
    }

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
            <div>
                <button onClick={ addPost }>Add posts</button>
            </div>
            { postsElements }
            </div>
    )
  }
  
  
  export default MyPosts;