import React from "react";
import {useField} from 'formik'

const InputTextField =({label,...props}) =>{
    //this is part of form component to will use to create card
const [field, meta] =useField(props)
    return(
<div>
<label>{label}</label>
<input {...field } {...props} className ={meta.touched && meta.error ? "input-error": ""} />

{meta.touched && meta.error && <div className="error">{meta.error} </div>}
</div>

    )
}

export default InputTextField