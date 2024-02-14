import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
       <h1 className="text-sky-600 font-black text-6xl capitalize">Sign up now and manage your <span className="text-slate-700">projects</span></h1>
      <form className="my-10 bg-white shadow rounded-lg px-10 py-5">
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
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
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
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
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
          <input
            id="password"
            type="password"
            placeholder="********"
            className="w-full mt-3 mb-8 p-3 border rounded-xl bg-gray-50"
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
          <input
            id="confirm_password"
            type="password"
            placeholder="********"
            className="w-full mt-3 mb-8 p-3 border rounded-xl bg-gray-50"
          />
          <input
            type="submit"
            value="Sign up"
            className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </div>
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/">
          Already have an account? Login
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
