import { useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import axios from 'axios';
import CustomCheckBox from "./CustomCheckBox";

const CustomColor = ({ label, ...props }) => {
  // console.log(name1);
  const [field, meta, helpers] = useField(props);
  const [colors, setColors] = useState([]);
  const {
    values: { category_id },
    setFieldValue
  } = useFormikContext();

  useEffect(() => {
    const fetchColors = async () => {
      try {
        // console.log(category_id);
        if (category_id.trim() !== "") {
          const responseColors = await axios.get(`http://localhost:3010/api/categories/${category_id}/colors`);
          console.log(responseColors.data.data);
          setColors(responseColors.data.data || null);
          // console.log(responseColors);
        }
        else {
          setColors([]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchColors();
  }, [category_id])

  return (
    <div>
      {colors.length > 0 && colors.map((color) => (
        <CustomCheckBox
          label={color.name}
          name={props.name}
          key={color.id}
          value={color.id}
        />
      ))}
      {meta.touched && meta.error && <div className="">{meta.error}</div>}

    </div>
  )
}

export default CustomColor;
