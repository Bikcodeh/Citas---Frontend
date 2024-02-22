import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RegisterFormData } from "../interfaces";
import { useRegisterUser } from "../hooks/useRegisterUser";
import { Button } from '@chakra-ui/react'
import AlertMessage from "../components/AlertMessage";
import { getErrorMessage } from "../utils";

const initialData: RegisterFormData = {
  name: '',
  email: '',
  password: '',
  confirm_password: ''
}

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
    .max(100, 'Max 100 characters'),
  password: Yup.string()
    .required('Required')
    .min(6, 'At least 6 characters')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirm_password: Yup.string()
    .required('Required')
    .min(6, 'At least 6 characters')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .oneOf([Yup.ref('password')], 'Passwords must match')
});

export const RegisterPage = () => {

  const { error, isSuccess, isLoading, data, isError, mutate: registerMutate } = useRegisterUser();

  const handleSubmit = (formData: RegisterFormData) => {
    setTimeout(() => {
      registerMutate(formData);
    }, 1800);
  }

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Sign up now and manage your <span className="text-slate-700">projects</span></h1>
      {
        isError && (<AlertMessage status="error" message={getErrorMessage(error)} title="" />)
      }
      {
        isSuccess && (<AlertMessage status="success" message={data.data.msg} title="" />)
      }
      <Formik
        validateOnChange
        validateOnBlur
        initialValues={initialData}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmit(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className="my-10 bg-white shadow rounded-lg px-10 py-5">
            <div className="my-5">
              <label
                htmlFor="name"
                className="
              uppercase 
              text-gray-600 
              block 
              text-xl 
              font-bold"
              >
                Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className={`w-full mt-3 p-3 border rounded-xl bg-gray-50 ${errors.name ? 'border-red-700' : ''} `}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-700"
              />
            </div>
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
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className={`w-full mt-3 p-3 border rounded-xl bg-gray-50 ${errors.email ? 'border-red-700' : ''} `}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-700"
              />
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
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="********"
                className={`w-full mt-3 p-3 border rounded-xl bg-gray-50 ${errors.password ? 'border-red-700' : ''} `}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-700"
              />
            </div>
            <div className="my-5">
              <label
                htmlFor="confirm_password"
                className="
              uppercase 
              text-gray-600 
              block 
              text-xl 
              font-bold"
              >
                Confirm Password
              </label>
              <Field
                id="confirm_password"
                name="confirm_password"
                type="password"
                placeholder="********"
                className={`w-full mt-3 mb-2 p-3 border rounded-xl bg-gray-50 ${errors.confirm_password ? 'border-red-700' : ''} `}
              />
              <ErrorMessage
                name="confirm_password"
                component="div"
                className="text-red-700"
              />
            </div>
            <Button
              isLoading={isLoading && isSubmitting}
              loadingText='Submitting'
              variant='solid'
              type="submit"
              disabled={isSubmitting}
              colorScheme='blue'
              fontWeight='bold'
              className="w-full py-6 uppercase rounded hover:cursor-pointer transition-colors"
            >Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center text-slate-500 uppercase text-sm"
          to="/">
          Already have an account? Login
        </Link>
        <Link
          className="block text-center text-slate-500 uppercase text-sm"
          to="/forgot-password">
          Forgot my password
        </Link>
      </nav>
    </>
  )
}
