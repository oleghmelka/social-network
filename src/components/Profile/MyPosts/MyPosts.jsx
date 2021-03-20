import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Formik, Form, Field } from 'formik';

const AddNewPostForm = (props) => {

    let onAddPost = (formData) => {
        console.log(formData);
        props.addPost(formData.newPostText);
    }

    return  <div>
                <Formik initialValues={{ newPostText: '' }} onSubmit={onAddPost} >
                    {() => (
                        <Form>
                            <div>
                                <Field component="textarea" name="newPostText" placeholder="write here ..." />
                            </div>

                            <div>
                                <button type="submit">Add posts</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

}


const MyPosts = (props) => {
    
    let postsElements = props.posts.map ( element => <Post message={element.message}  likesCount={element.likesCount} />);

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostForm addPost={props.addPost} />
            { postsElements }
            </div>
    )
  }



export default MyPosts;