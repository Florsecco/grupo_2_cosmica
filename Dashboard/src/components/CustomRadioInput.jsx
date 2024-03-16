import React from 'react';
import { useField } from 'formik';

const CustomRadioInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label>
        <input type='radio'{...field} {...props}
          className={meta.touched && meta.error ? "input-error" : ""} />
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className="">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomRadioInput;