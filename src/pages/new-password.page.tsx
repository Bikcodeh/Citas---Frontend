import { useParams } from "react-router-dom"
import { useChangePassword } from "../hooks/useChangePassword";
import AlertMessage from "../components/AlertMessage";
import { getErrorMessage } from "../utils";
import Loading from "../components/Loading";

export const NewPasswordPage = () => {
  const { token } = useParams();
  const { changePasswordQuery } = useChangePassword(token || '');
  const { isLoading, isError, error, data } = changePasswordQuery;

  if (isLoading) {
    return (<Loading />);
  }

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Change your password and manage your <span className="text-slate-700">projects</span></h1>
      {
        isError && (<AlertMessage status="error" message={getErrorMessage(error)} title="" />)
      }
      {
        data?.success == true && (
          <form className="my-10 bg-white shadow rounded-lg px-10 py-5">
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
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              />
            </div>
            <input
              type="submit"
              value="Save new password"
              className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
          </form>
        )
      }
    </>
  )
}
