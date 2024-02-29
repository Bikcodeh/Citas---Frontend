import { Link } from "react-router-dom"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/react'
import AlertMessage from "../components/AlertMessage";
import { getErrorMessage } from "../utils";
import { useAuth, useLogin } from "../hooks";
import { useEffect } from "react";

type LoginFormData = {
  email?: string;
  password?: string;
}

const initialData: LoginFormData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const loginMutation = useLogin();
  const { setUser } = useAuth();
  const { isError, isLoading, isSuccess, error, data } = loginMutation;

  const formik = useFormik({
    initialValues: initialData,
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required')
        .min(6, 'At least 6 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),
    onSubmit: values => {
      handleOnSubmit(values)
    }
  })

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('token', data.data.token)
      setUser(data.data)
    }
  }, [isSuccess])

  const handleOnSubmit = (data: LoginFormData) => {
    loginMutation.mutate({ email: data.email!, password: data.password! })
  }
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Sign in and manage your <span className="text-slate-700">projects</span></h1>
      {
        isError && (<AlertMessage dismissible={true} status="error" message={getErrorMessage(error)} title="" />)
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
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email"
            placeholder="example@gmail.com"
            className={`form-field  ${formik.errors.email ? 'border-red-700' : ''} `}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-700">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="my-5">
          <label
            htmlFor="password"
            className="
              uppercase 
              text-gray-600 
              block 
              text-xl 
              font-bold"
          >
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`form-field  ${formik.errors.password ? 'border-red-700' : ''} `}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-700">{formik.errors.password}</div>
          ) : null}
        </div>
        <Button
          isLoading={isLoading && formik.isSubmitting}
          loadingText='Submitting'
          variant='solid'
          type="submit"
          disabled={formik.isSubmitting}
          colorScheme='blue'
          fontWeight='bold'
          className="w-full py-6 uppercase rounded hover:cursor-pointer transition-colors"
        >Sign in
        </Button>
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="register">
          Don't have an account? Sign up now
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/forgot-password">
          Forgot my password
        </Link>
      </nav>
    </>
  )
}