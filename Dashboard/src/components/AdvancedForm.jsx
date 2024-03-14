import { Formik } from "formik";

const AdvancedForm = () => {
  return (
    <Formik initialValues={{ name: "Gabyfinn" }}>
      {(props) => {
        <form onSubmit={props.handleSubmit}>
          <input

            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          <button type="submit">Submit</button>
        </form>
      }}
    </Formik>
  );
};

export default AdvancedForm;