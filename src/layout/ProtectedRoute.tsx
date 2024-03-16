import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../hooks"
import Loading from "../components/Loading";
import { Header, Sidebar } from "../components";
import { DrawerSide } from "../components/DrawerSide";

export const ProtectedRoute: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return (<Loading full={true} />)
  return (
    <>
      {
        user?._id ? (
          <div className="bg-gray-100 h-screen flex flex-col">
            <Header />
            <div className="flex flex-1 ">
              <DrawerSide />
              <Sidebar />
              <main className="w-full mx-4 mt-5 my-10">
                <Outlet />
              </main>
            </div>
          </div>
        ) : <Navigate to="/" />
      }
    </>
  )
}