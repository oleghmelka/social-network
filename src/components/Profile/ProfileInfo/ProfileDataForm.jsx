import React from 'react';
import { Form, Formik } from 'formik';
import FormikControl from '../../common/FormikComponents/FormikControl';
import * as Yup from 'yup';
import s from './../../common/FormikComponents/FormikComponents.module.css';
import style from './ProfileInfo.module.css';

const ProfileDataForm = ({profile, saveProfile, setEditMode, someError}) => {
    
    const initialValues = {
        fullName: profile.fullName,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        aboutMe: profile.aboutMe,
        lookingForAJob: profile.lookingForAJob
    }
  
    const validationSchema = Yup.object({
        fullName: Yup.string().required('Required'),
        lookingForAJobDescription: Yup.string().required('Required'),
        aboutMe: Yup.string().required('Required'),
        lookingForAJob: Yup.bool()
    })
  
    const onSubmit = (formData) => {
        saveProfile(formData).then(
          () => {
            setEditMode(false);
          }
        );
    }
    
    return (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => {
            return (
              <Form>
                  <div>
                      <FormikControl control='input' type='text' label='Full name:' name='fullName' placeholder='Full name' />
                  </div>
                  <div>
                      <FormikControl control='checkbox_boolean' label='Looking for a job:' name='lookingForAJob' />
                  </div>
                  <div>
                      <FormikControl control='textarea' type='text' label='My professional skills:' name='lookingForAJobDescription' placeholder='My professional skills' />
                  </div>
                  <div>
                      <FormikControl control='textarea' type='text' label='About me:' name='aboutMe' placeholder='About me' />
                  </div>

                  <div >
                      <b>Contacts:</b> 
                            <div className={style.social_contacts_form}>
                                  {Object.keys(profile.contacts).map(key => {
                                      return <FormikControl key={key} control='input' type='text' label={key} name={'contacts.'+ key} placeholder={profile.contacts[key]} />
                                  })}
                            </div>
                  </div>

                  {someError && <div className={s.formSummaryError}>{someError}</div>}

                  <div>
                    <button type='submit' disabled={!formik.isValid}>Save</button>
                  </div>
                
              
                
              </Form>
            )
          }}
        </Formik>
      )
}

export default ProfileDataForm