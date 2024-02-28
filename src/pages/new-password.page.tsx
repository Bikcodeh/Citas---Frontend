import { Link, useParams } from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Button } from '@chakra-ui/react'
import AlertMessage from "../components/AlertMessage";
import { getErrorMessage } from "../utils";
import Loading from "../components/Loading";
import { useChangePassword, usevalidateTokenForPassword } from "../hooks";

export const NewPasswordPage = () => {

  const formik = useFormik({
    initialValues: {
      new_password: ''
    },
    validationSchema: Yup.object({
      new_password: Yup.string()
        .required('Required')
        .min(6, 'At least 6 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),
    onSubmit: values => {
      handleOnSubmit(values.new_password)
    }
  })

  const { token = '' } = useParams();
  const { validateTokenForPasswordQuery } = usevalidateTokenForPassword(token || '');
  const { isLoading, isError, error, data } = validateTokenForPasswordQuery;
  const { changePasswordMutation } = useChangePassword()

  if (isLoading) {
    return (<Loading />);
  }

  const handleOnSubmit = (password: string) => {
    changePasswordMutation.mutate({ token, password })
  }

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Change your password and manage your <span className="text-slate-700">projects</span></h1>
      {
        isError && (<AlertMessage status="error" message={getErrorMessage(error)} title="" />)
      }
      {
        changePasswordMutation.isError && (<AlertMessage status="error" message={getErrorMessage(changePasswordMutation.error)} title="" />)
      }
      {
        data?.success == true && !changePasswordMutation.data && (
          <form onSubmit={formik.handleSubmit} className="my-10 bg-white shadow rounded-lg px-10 py-5">
            <div className="my-5">
              <label
                htmlFor="new_password"
                className="
                uppercase 
                text-gray-600 
                block 
                text-xl 
                font-bold"
              >
                New Password
              </label>
              <input
                id="new_password"
                type="password"
                placeholder="Your new password"
                className={`form-field  ${formik.errors.new_password ? 'border-red-700' : ''} `}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.new_password}
              />
              {formik.touched.new_password && formik.errors.new_password ? (
                <div className="text-red-700">{formik.errors.new_password}</div>
              ) : null}
            </div>
            <Button
              isLoading={changePasswordMutation.isLoading}
              loadingText='Submitting'
              variant='solid'
              type="submit"
              disabled={changePasswordMutation.isLoading}
              colorScheme='blue'
              fontWeight='bold'
              className="w-full py-6 uppercase rounded hover:cursor-pointer transition-colors"
            >Change Password
            </Button>
          </form>
        )
      }
      {
        changePasswordMutation.isSuccess && (
          <>
            <AlertMessage status="success" message={changePasswordMutation.data.data.msg} title="" />
            <Link
              to="/"
              replace>

              <Button
                variant='solid'
                colorScheme='blue'
                fontWeight='bold'
                className="w-full py-6 uppercase rounded hover:cursor-pointer transition-colors"
              >Login</Button>
            </Link>
          </>
        )
      }
    </>
  )
}
