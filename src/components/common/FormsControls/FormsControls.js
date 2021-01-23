import React from "react";
import classes from "./FormsControls.module.css"

export const FormElement = Element => ({input, meta, ...props}) => {

  const hasError = meta.touched && meta.error;

  return (
    <div>
      <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
        <Element {...input} {...props}/>
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
