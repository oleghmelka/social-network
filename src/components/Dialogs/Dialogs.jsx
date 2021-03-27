import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import React from 'react';
//import { Redirect } from 'react-router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './../common/FormikComponents/FormikControl';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map ( dia => <DialogItem name={dia.name}  id={dia.id} image={dia.image} /> );
    let messagesElements = state.messages.map ( mes => <Message message={mes.message} id={mes.id} /> );

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm sendMessage={props.sendMessage} />
            </div>
            
        </div>
    );
  }
  



  const AddMessageForm = (props) => {

    const initialValues = {
        description: ''
    }

    const validationSchema = Yup.object({
        description: Yup.string().required('Required')
    })


    let addNewMessage = (values) => {
        props.sendMessage(values.description);
    }

    return (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={addNewMessage}
        >
          {formik => {
            return (
              <Form>
                <FormikControl
                    control='textarea'
                    label=''
                    name='description'
                />
                <button type='submit' disabled={!formik.isValid}>Submit</button>
              </Form>
            )
          }}
        </Formik>
      )



    /*
    return  <div>
                <Formik initialValues={{ newMessageBody: '' }} onSubmit={addNewMessage} >
                    {() => (
                        <Form>
                            <div>
                                <Field component="textarea" name="newMessageBody" placeholder="write here ..." />
                            </div>
                            <div>
                                <button >Send</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
    */

}

export default Dialogs;