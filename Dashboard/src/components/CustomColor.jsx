import { useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import axios from 'axios';

const CustomColor = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const {
    values: { category_id, colorStocks },
    setFieldValue,
  } = useFormikContext();

  useEffect(() => {
    const fetchColors = async () => {
      try {
        if (category_id.trim() !== "") {
          const responseColors = await axios.get(`http://localhost:3010/api/categories/${category_id}/colors`);
          setColors(responseColors.data.data || null);
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

  const handleColorChange = (colorId, checked) => {
    if (checked) {
      setSelectedColors(prevState => [...prevState, colorId]);
    } else {
      setSelectedColors(prevState => prevState.filter(id => id !== colorId));
    }
  };

  const handleStockChange = (colorId, stock) => {
    const colorStock = colorStocks.find(color => color.color_id === colorId);
    if (colorStock) {
      colorStock.stock = stock;
    }
    else {
      colorStocks.push({ color_id: colorId, stock })
    }
    setFieldValue(props.name, colorStocks);
  };

  return (
    <div>
      {colors && colors.map((color) => (
        // <CustomCheckBox
        //   label={color.name}
        //   name={props.name}
        //   key={color.id}
        //   value={color.id}
        // />
        <div key={color.id}>
          <input
            type="checkbox"
            id={color.id}
            name={props.name}
            value={color.id}
            onChange={(e) => handleColorChange(color.id, e.target.checked)}
          />
          <label htmlFor={color.id}>{color.name}</label>
          {selectedColors.includes(color.id) && (
            <input
              type="number"
              name="stocks"
              // value={selectedColors.find(id => id === color.id)}
              onChange={(e) => handleStockChange(color.id, e.target.value)}
              placeholder="Stock"
            />
          )}
        </div>
      ))}
      {meta.touched && meta.error && <div className="">{meta.error}</div>}

    </div>
  )
}

export default CustomColor;
