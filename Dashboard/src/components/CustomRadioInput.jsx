import React from 'react';
import { useField } from 'formik';

const CustomRadioInput = ({ label, selectedValue, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label>
        <input type='radio'{...field} {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
          checked={props.value == field.value}
        />
        {label}
      </label>
    </div>
  );
};

export default CustomRadioInput;