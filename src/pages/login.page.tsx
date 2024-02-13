export const LoginPage = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Sign in and manage your <span className="text-slate-700">projects</span></h1>
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
          <input
            type="submit"
            value="Sign in"
            className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </div>
      </form>
    </>
  )
}