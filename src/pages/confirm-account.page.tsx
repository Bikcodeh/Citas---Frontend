import { Link, useParams } from "react-router-dom"
import { useConfirmAccount } from "../hooks/useConfrmAccount";
import AlertMessage from "../components/AlertMessage";
import { getErrorMessage } from "../utils";
import Loading from "../components/Loading";
import { Box } from "@chakra-ui/react";

export const ConfirmAccountPage = () => {

  const { id } = useParams();
  const { confirmAccountQuery } = useConfirmAccount(id || '');

  const { data, isError, error, isLoading, isSuccess } = confirmAccountQuery;

  if (isLoading) {
    return (<Box display="flex" justifyContent="center" alignContent="center"><Loading /></Box>)
  }


  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Confirm your account and manage your <span className="text-slate-700">projects</span></h1>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {
          isError && (<AlertMessage status="error" message={getErrorMessage(error)} title="" />)
        }
        {
          isSuccess && (<AlertMessage status="success" message={data.msg} title="" />)
        }
        {
          isSuccess && (
            <Link
              className="block text-center text-slate-500 uppercase text-sm"
              to="/">
              Sign in
            </Link>)
        }
      </div>
    </>
  )
}
