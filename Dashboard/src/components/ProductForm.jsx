import { Formik, Form, } from "formik";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import axios from 'axios';
import CustomInput from "./CustomInput";
import CustomRadioInput from "./CustomRadioInput";
import CustomTextAreaInput from "./CustomTextAreaInput";
import CustomImageInput from "./CustomImageInput";
import CustomSelect from "./CustomSelect";
import CustomColor from "./CustomColor";
import CustomBrand from "./CustomBrand";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  console.log("submitted");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
}

const ProductForm = () => {


  const [brands, setBrands] = useState();
  const [categories, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchApi = async () => {
      try {
        const responseBrand = await axios.get("http://localhost:3010/api/brands");
        // console.log(responseBrand);
        setBrands(responseBrand.data.data || null);
        // console.log(brands);

        const responseCategory = await axios.get("http://localhost:3010/api/categories");
        // console.log(responseCategory);
        setCategory(responseCategory.data.data || null);
        // console.log(categories);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApi();

  }, []);



  console.log(brands);
  const productCreateSchema = !isLoading && yup.object().shape({
    name: yup.string().trim().min(5, "El nombre debe tener al menos 5 letras.").required("Debe ingresar el nombre del producto"),
    description_short: yup.string().trim().min(20, "La descripcion corta debe tener 20 letras como minimo.").required("Debe ingresar la descripcion corta"),
    description_long: yup.string().trim().min(20, "La descripcion larga debe tener 20 letras como minimo").required("Debe ingresar la descripcion larga."),
    brand_id: yup.number().oneOf(brands.map(brand => brand.id || ""), "Marca no existente.").required("Debe seleccionar una marca."),
    ingredients: yup.string().trim().required("Tiene que ingresar los ingredientes del producto"),
    price: yup.number().required("Debe ingresar el precio del producto."),
    product: yup.mixed().required("Tiene que cargar una imagen").test('fileType', "Solo imagenes son permitidas.", (value) => {
      if (!value) return true;
      return value && ['image/jpeg', 'image/png'].includes(value.type);
    }),
    category_id: yup.number().oneOf(categories.map(category => category.id || ""), "Categoria no existente.").required("Debe seleccionar una categoria."),
    colors_id: yup.array()
      .when('category_id', { // Condicionamos la validación a 'category_id'
        is: value => value, // Validamos si 'category_id' tiene un valor (es decir, si se ha seleccionado una categoría)
        then: (schema) => schema.min(1, 'Debes seleccionar al menos un color.') // Aplicamos la validación solo si 'category_id' tiene un valor
      }),

  });


  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <Formik
        initialValues={{ name: "", description_short: "", description_long: "", brand_id: "", ingredients: "", price: "", product: null, category_id: "", colors_id: [] }}
        validationSchema={productCreateSchema}
        onSubmit={onSubmit}
      >

        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Nombre"
              name="name"
              type="text"
              placeholder="Ingrese el nombre del producto"
            />
            <br />
            <CustomTextAreaInput
              label="Descripcion Corta"
              name="description_short"
              placeholder="Descripcion corta del producto"
            />
            <CustomTextAreaInput
              label="Descripcion Larga"
              name="description_long"
              placeholder="Descripcion Larga del producto"
            />
            <CustomTextAreaInput
              label="Ingredientes"
              name="ingredients"
              placeholder="Ingredientes del producto."
            />
            <CustomInput
              label="Precio"
              name="price"
              type="number"
              placeholder="$12.34"
            />

            <CustomImageInput
              name="product"
              label="Imagen"
            />
            <CustomSelect
              label="Categoria"
              name="category_id"
            >
              <option value=""> Selecciona una categoria</option>
              {categories && categories.map(category => (
                <option value={category.id} key={category.id}>{category.name}</option>
              ))
              }
            </CustomSelect>
            <CustomColor
              label="Colores"
              name="colors_id"
              type="checkbox"
            />
            <CustomBrand
              label="Marcas"
              name="brand_id"
            />
            <button disabled={isSubmitting} type="submit">Submit</button>
          </Form>
        )}
      </Formik>}
    </>
  )
}


export default ProductForm;