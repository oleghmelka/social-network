import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './../../common/FormikComponents/FormikControl';

const MyPosts = (props) => {
    
    let postsElements = props.posts.map ( element => <Post message={element.message}  likesCount={element.likesCount} />);

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostForm addPost={props.addPost}/>
            { postsElements }
            </div>
    )
}


const AddNewPostForm = (props) => {
    
    const initialValues = {
        description: ''
    }

    const validationSchema = Yup.object({
        description: Yup.string().required('Required')
    })


    let onAddPost = (values) => {
        props.addPost(values.description);
    }


    return (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onAddPost}
        >
          {formik => {
            return (
              <Form>
                <FormikControl
                    control='textarea'
                    label=''
                    name='description'
                    placeholder="write here ..."
                />
                <button type='submit' disabled={!formik.isValid}>Submit</button>
              </Form>
            )
          }}
        </Formik>
      )



/*
    return  <div>
                <Formik initialValues={initialValues} onSubmit={onAddPost} validate={validate} >
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
*/




}




export default MyPosts;