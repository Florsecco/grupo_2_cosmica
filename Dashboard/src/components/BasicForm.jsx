import { useFormik } from "formik";
const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: 0,
      password: ""
    },
  });
  console.log(formik);
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </form>
  );
};
export default BasicForm;