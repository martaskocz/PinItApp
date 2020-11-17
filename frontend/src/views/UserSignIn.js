import React from 'react';
import {Formik, Form, Field} from 'formik';
import axios from 'axios';
import Logo from 'components/atoms/Logo/Logo';
import Heading from 'components/atoms/Heading/Heading';

const UserSignIn = () => {
  return(
   <div>
     <Logo to="/login" exact/>
     <Heading big>Your new favourite online notes experience</Heading>
     <Formik
       initialValues={{username: "", password: ""}}
       onSubmit={({username, password})=> {
         axios.post('http://localhost:9000/api/user/login', {
           username, password
         })
           .then(()=> console.log('Login successful'))
           .catch(err => console.log(err))
       }}>
       {() => (
         <Form>
           <Field name="username" type="text"/>
           <Field name="password" type="password"/>
           <button type="submit">Sign In</button>
         </Form>
       )}
     </Formik>
   </div>
  )
};

export default UserSignIn;