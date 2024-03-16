import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

function LoginForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    
    try {
        if (email === "" || password === "") {
            setError(true);
            return;
          } else {
            setError(false);
          }
      const response = await fetch("http://localhost:3010/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      setUser([data.first_name]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError(true);
      return;
    } else {
      handleSubmit1();
    }
    setError(false);
    setUser([email]);
  };

  return (
    <>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit1}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="nombre@hotmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </>
  );
}

// const LoginForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: ""
//     },
//     onSubmit: values => {
//         alert(JSON.stringify(values, null, 2));
//       },
//   });
//   console.log(formik);
//   return (
//     <>
//     <h1>Login</h1>
//     <form autoComplete="off" onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         type="email"
//         placeholder="Enter your email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//       />
//       <label htmlFor="password">Password</label>
//       <input
//         id="password"
//         type="password"
//         placeholder="Enter your password"
//         value={formik.values.password}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//       />
//       <button type="submit">Iniciar Sesión</button>
//     </form>
//     </>
//   );
// };
export default LoginForm;
