import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';

export const ForgotPasswordPage = () => {

  const handleOnSubmit = (email: string) => {
      console.log(email);
  }

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required')
    }),
    onSubmit: values => {
      handleOnSubmit(values.email)
    }
  })
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Recover your password  and manage your <span className="text-slate-700">projects</span></h1>
      <form onSubmit={formik.handleSubmit} className="my-10 bg-white shadow rounded-lg px-10 py-5">
        <div className="my-5">
          <label
            htmlFor="email"
            className="
              uppercase 
              text-gray-600 
              block 
              text-xl 
              font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className={`form-field  ${formik.errors.email ? 'border-red-700' : ''} `}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-700">{formik.errors.email}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        >
          Send instruction
          </button>
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/register">
          Don't have an account? Sign up now
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/">
          Already have an account? Login
        </Link>
      </nav>
    </>
  )
}
