import { useFormik } from "formik";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { Link } from "react-router-dom";
import DarkModeToggle from "../Components/DarkModeToggle";
import { useState } from "react";
export default function FormPage() {
  const [showPassword, setShowPassword] = useState(false);

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
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white flex items-center justify-center transition-colors">
      <DarkModeToggle />
      <Link to="/" className="absolute top-6 left-6">
        <Button className="px-3 py-1 text-sm rounded-md border border-stone-300 text-stone-700 hover:bg-stone-100 transition dark:text-white">
          ← Home
        </Button>
      </Link>

      <form
        onSubmit={formik.handleSubmit}
        className="
                bg-white dark:bg-gray-800
                p-6 rounded-lg shadow
                w-full max-w-md space-y-4
                transition-colors
              "
      >
        <h1 className="text-2xl font-bold text-center text-black-900 dark:text-white">
          Contact Form
        </h1>

        <Input label="Name" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}

        <Input label="Email" type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm ">{formik.errors.email}</p>
        )}

        <Input label="Mobile" type="tel" {...formik.getFieldProps("mobile")} />
        {formik.touched.mobile && formik.errors.mobile && (
          <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
        )}

        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          showToggle
          isPasswordVisible={showPassword}
          onToggle={() => setShowPassword((prev) => !prev)}
          {...formik.getFieldProps("password")}
        />

        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 dark:text-red-400 text-sm">
            {formik.errors.password}
          </p>
        )}

        <Input
          label="Confirm Password"
          type="password"
          {...formik.getFieldProps("confirmPassword")}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {formik.errors.confirmPassword}
          </p>
        )}

        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-sm dark:text-white text-stone-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="border rounded-md min-h-[100px] max-h-[160px] p-2 focus:outline-none dark:text-white dark:bg-gray-700  focus:ring-2 focus:ring-black"
            {...formik.getFieldProps("message")}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-black text-white py-2 rounded  "
        >
          Submit
        </Button>
      </form>
    </main>
  );
}
