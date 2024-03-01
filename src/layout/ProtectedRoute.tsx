import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../hooks"
import Loading from "../components/Loading";
import { Header, Sidebar } from "../components";


export const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return (<Loading full={true} />)
  return (
    <>
      {
        user?._id ? (
          <div className="bg-gray-100">
            <Header />
            <div className="md:flex md:min-h-screen">
              <Sidebar />
              <main className="flex flex-1 mx-4 pt-4">
                <Outlet />
              </main>
            </div>
          </div>
        ) : <Navigate to="/" />
      }
    </>
  )
}