"use client";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const validationSchema = yup.object({
  firstName: yup.string().required("Ta boglono uu"),
  lastName: yup.string().required("ta boglono uu"),
  email: yup
    .string()
    .email("Aldaatai email")
    .required("Ta email ee boglono uu"),
  password: yup
    .string()
    .min(8)
    .validate((values) => {}),
  // .required(),
});

const onSubmit = (values) => {
  alert(
    `hello ${formik.values.firstName} ${formik.values.lastName} ${formik.values.email} `
  );
};

const FormPage = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="p-5">
      <form
        className="flex flex-col gap-3 p-4 border max-w-60"
        onSubmit={formik.handleSubmit}
      >
        <label>Your first name</label>
        <input
          className="p-1 border rounded"
          placeholder="firstname"
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        {formik.errors.firstName ? (
          <p className="text-red-500">{formik.errors.firstName}</p>
        ) : null}

        <label>Your last name</label>
        <input
          className="p-1 border rounded"
          placeholder="lastname"
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        {formik.errors.lastName ? (
          <p className="text-red-500">{formik.errors.lastName}</p>
        ) : null}
        <label>Your email</label>
        <input
          className="p-1 border rounded"
          placeholder="email"
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <p className="text-red-500">{formik.errors.email}</p>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// const FormPage = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//     },
//     onSubmit: (values) => {
//       console.log("formik values: ", formik.values);
//     },
//     validate: (values) => {
//       let errors = {};

//       if (!values.firstName) {
//         errors.firstName = "Required";
//       }
//       if (!values.lastName) {
//         errors.lastName = "Required";
//       }

//       if (!values.email) {
//         errors.email = "Required";
//       }

//       return errors;
//     },
//   });

//   console.log("Formik errors", formik.errors);

//   return (
//     <div className="p-5">
//       <form
//         onSubmit={formik.handleSubmit}
//         className="flex flex-col gap-3 p-4 border max-w-60"
//       >
//         <label>Your first name</label>
//         <input
//           className="p-1 border rounded"
//           placeholder="firstname"
//           type="text"
//           id="firstName"
//           name="firstName"
//           onChange={formik.handleChange}
//           value={formik.values.firstName}
//         />
//         {formik.errors.firstName ? (
//           <p className="text-red-500">{formik.errors.firstName}</p>
//         ) : null}
//         <label>Your last name</label>
//         <input
//           className="p-1 border rounded"
//           placeholder="lastname"
//           type="text"
//           id="lastName"
//           name="lastName"
//           onChange={formik.handleChange}
//           value={formik.values.lastName}
//         />
//         {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
//         <label>Your last email</label>
//         <input
//           className="p-1 border rounded"
//           placeholder="email"
//           type="text"
//           id="email"
//           name="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />
//         {formik.errors.email ? <p>{formik.errors.email}</p> : null}

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

export default FormPage;
