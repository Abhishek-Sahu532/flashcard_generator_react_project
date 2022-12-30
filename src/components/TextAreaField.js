import React from 'react'
import { useField } from "formik";
function TextAreaField({label, ...props}) {
    //this is the text area, part of form component to use to create cards
    const [field, meta] = useField(props);
  return (
    <div>
      <label>{label}</label>
      <textarea
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default TextAreaField
