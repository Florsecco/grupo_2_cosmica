import { useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import axios from 'axios';
import CustomSelect from "./CustomSelect";
import CustomRadioInput from "./CustomRadioInput";

const CustomBrand = ({ label, brands, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div>
      <br />
      <label>{label}</label>
      <br />
      {
        brands && brands.map(brand => (

          <CustomRadioInput
            label={brand.name}
            name={props.name}
            value={brand.id}
            key={brand.id}
            selectedValue={props.value}
          />
        ))
      }
      {meta.touched && meta.error && <div className="">{meta.error}</div>}

    </div>
  )
}

export default CustomBrand;
