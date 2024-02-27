import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { Button } from '@chakra-ui/react'
import { useForgotPassword } from "../hooks/useForgotPassword";
import AlertMessage from "../components/AlertMessage";
import { getErrorMessage } from "../utils";

export const ForgotPasswordPage = () => {

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

  const forgotPasswordMutation = useForgotPassword();
  const {isError, isSuccess, error, data, isLoading } = forgotPasswordMutation;

  const handleOnSubmit = (email: string) => {
      forgotPasswordMutation.mutate(email)
  }
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Recover your password  and manage your <span className="text-slate-700">projects</span></h1>
      {
        isError && (<AlertMessage status="error" message={getErrorMessage(error)} title="" />)
      }
      {
        isSuccess && (<AlertMessage status="success" message={data.data.msg} title="" />)
      }
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
        <Button
              isLoading={isLoading}
              loadingText='Submitting'
              variant='solid'
              type="submit"
              disabled={isLoading}
              colorScheme='blue'
              fontWeight='bold'
              className="w-full py-6 uppercase rounded hover:cursor-pointer transition-colors"
            >Recover Password
            </Button>
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
