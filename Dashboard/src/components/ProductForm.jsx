import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import axios from 'axios';
import CustomInput from "./CustomInput";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  console.log("submitted");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
}


const ProductForm = () => {
  const [brands, setBrands] = useState();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const response = await axios.get(`http://localhost:3010/api/products/${idProduct}`);
    setBrands(response.data.data || null);

    setIsLoading(false);

  }, []);

  const productCreateSchema = yup.object().shape({
    name: yup.string().trim().min(5, "El nombre debe tener al menos 5 letras.").required("Debe ingresar el nombre del producto"),
    description_short: yup.string().trim().min(20, "La descripcion corta debe tener 20 letras como minimo.").required("Debe ingresar la descripcion corta"),
    description_long: yup.string().min(20, "La descripcion larga debe tener 20 letras como minimo").required("Debe ingresar la descripcion larga."),
    brand_id: yup.number().oneOf(brands.map(brand => brand.id), "Marca no existente.").required("Required")
  });


  return (
    <Formik
      initialValues={{ name: "", description_short: "", description_long: "", brand_id: "" }}
      validationSchema={productCreateSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="name"
            name="name"
            type="text"
            placeholder="Ingrese el nombre del producto"
          />
          <button disabled={isSubmitting} type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}


export default ProductForm;