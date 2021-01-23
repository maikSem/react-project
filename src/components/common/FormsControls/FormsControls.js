import React from "react";
import classes from "./FormsControls.module.css"

export const Textarea = ({input, meta, ...props}) => {

  const hasError = meta.touched && meta.error;

  return (
    <div>
      <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
        <textarea {...input} {...props} placeholder='Post message'/>
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
