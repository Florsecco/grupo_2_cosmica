import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  console.log("Entre al custominput");
  const [field, meta, helpers] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  return (
    <>
      <label>{label}</label>
      <input {...field} {...props}
        className={meta.touched && meta.error ? "input-error" : ""} />
      {meta.touched && meta.error && <div className="">{meta.error}</div>}
    </>

  );
};

export default CustomInput;