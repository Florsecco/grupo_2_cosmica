import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  console.log("Entre al custominput");
  const [field, meta, helpers] = useField(props);
  console.log("field", field);
  console.log("meta", meta);
  return (
    <>
      <label>{label}</label>
      <select {...field} {...props}
        className={meta.touched && meta.error ? "input-error" : ""} />
      {meta.touched && meta.error && <div className="">{meta.error}</div>}
    </>

  );
};

export default CustomSelect;