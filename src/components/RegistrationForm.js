import React from 'react';
//I have used Formik and yup for form handling & validation
//I have imported Form , Field, ErrorMessage from Formik
//Form is for creating form in Formik form must begin capital letter "Form"
//Field is like input, if you use Formik in react then you have to use Field instead input tag
//ErrorMessage for showing a error messages when someone inputs something wrong like wrong password or password does not match etc
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import '../components/Registration.css';

const RegistrationForm = () => {
  return (
    <>
        <div className='container'>
            <div className='form'>
            <h1>REGISTRATION FORM</h1>
            <Formik
            //Initaial values which we will get input in
            initialValues={{
                email:"",
                password:"",
                confirmpassword:""
            }}
            //validationSchema logic for validation, E-mail, Password, confirmpassword using yup
            validationSchema={yup.object({
                email: yup.string().email().required('Enter a valid email address !'),
                password: yup.string().min(8, 'Password must be 8 characters long!')
                .matches(/[0-9]/, 'Passsword requires a number !')
                .matches(/[a-z]/, 'Password requires a Lowercase latter !')
                .matches(/[A-Z]/, 'Password requires a UpperCase letter !')
                .matches(/[^\w]/, 'Password requires a symbol !'),
                confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Must match password field value !'),
            })}
            //onSubmit function for form submiting also here we can verify input data
            onSubmit={(values, {setSubmitting})=>{
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false);
            }

            }
            >
              <Form>
                    <Field type="email" name="email" placeholder="example@yourmail.com"/>
                    
                    
                    <p name='email'>
                        <ErrorMessage name='email'/>
                    </p>
                    <Field type="password" name="password" placeholder="Choose a secure password"/>
                    <p name='password'>
                        <ErrorMessage name='password'/>
                    </p>
                    <Field type="password" name="confirmpassword" placeholder="Choose a secure password"/>
                    <p name='confirmpassword'>
                        <ErrorMessage name='confirmpassword'/>
                    </p>
                    
                    <br/><br/>
                    
                    <button type='submit'>Create account</button>
                </Form>
            </Formik>
            </div>
        </div>
    </>
  )
}

export default RegistrationForm;