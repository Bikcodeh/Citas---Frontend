import { Link } from "react-router-dom";

export const ForgotPasswordPage = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Recover your password  and manage your <span className="text-slate-700">projects</span></h1>
      <form className="my-10 bg-white shadow rounded-lg px-10 py-5">
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
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <input
            type="submit"
            value="Send instructions"
            className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
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
