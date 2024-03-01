import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../hooks"
import Loading from "../components/Loading";


export const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return (<Loading full={true} />)
  return (
    <>
      {
        user?._id ? <Outlet /> : <Navigate to="/" />
      }
    </>
  )
}