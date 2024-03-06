import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../hooks"
import Loading from "../components/Loading";
import { Header, Sidebar } from "../components";
import { DrawerSide } from "../components/DrawerSide";


export const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return (<Loading full={true} />)
  return (
    <>
      {
        user?._id ? (
          <div className="bg-gray-100">
            <Header />
            <div className="lg:flex">
              <DrawerSide />
              <Sidebar />
              <main className="flex flex-1 mx-4">
                <Outlet />
              </main>
            </div>
          </div>
        ) : <Navigate to="/" />
      }
    </>
  )
}