import React from "react";
import { useFormik } from 'formik';

import './index.css';

function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  onSubmit: values => {
    console.log('form', values);
  },
  validate: values => {
    let errors = {};
    if (!values.email) errors.email = 'Field required';
    if (!values.password) errors.password = 'Field required';
    return errors;
  }
});
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
     <div>Email:</div>
        <input type="text" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input type="text" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}                
        <button id="submitBtn" type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
