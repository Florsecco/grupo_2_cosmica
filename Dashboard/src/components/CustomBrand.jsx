import { useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import axios from 'axios';
import CustomSelect from "./CustomSelect";
import CustomRadioInput from "./CustomRadioInput";

const CustomBrand = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [brands, setBrands] = useState();

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const responseBrand = await axios.get("http://localhost:3010/api/brands");
        setBrands(responseBrand.data.data || null);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBrand();
  }, [])

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
          />
        ))
      }
      {meta.touched && meta.error && <div className="">{meta.error}</div>}

    </div>
  )
}

export default CustomBrand;
