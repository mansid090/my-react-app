import { useFormik } from "formik";
import Button from "../Components/Button";
import Input from "../Components/Input";
import {Link} from 'react-router-dom'
export default function FormPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      message: "",
    },

    validate(values) {
      const errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (!values.email.includes("@")) {
        errors.email = "Invalid email address";
      }

      if (!values.mobile) {
        errors.mobile = "Mobile number is required";
      } else if (values.mobile.length !== 10) {
        errors.mobile = "Mobile number must be 10 digits";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = "Please confirm your password";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
      }

      return errors;
    },

    onSubmit(values) {
      console.log("Form submitted with data:", values);
      alert("Form submitted successfully");
    },
  });

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <Link to="/" className="absolute top-6 left-6">
        <Button className="px-3 py-1 text-sm rounded-md border border-stone-300 text-stone-700 hover:bg-stone-100 transition">
          ← Home
        </Button>
      </Link>

      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded-lg shadow w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Contact Form</h1>

      
        <Input
          label="Name"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}

        
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}

        
        <Input
          label="Mobile"
          id="mobile"
          name="mobile"
          type="tel"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.mobile && formik.errors.mobile && (
          <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
        )}

        
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm">{formik.errors.password}</p>
        )}

        
        <Input
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {formik.errors.confirmPassword}
          </p>
        )}

        
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm text-stone-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formik.values.message}
            onChange={formik.handleChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          Submit
        </Button>
      </form>
    </main>
  );
}
