//it is going to wrap Signin and Signup components

import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
  const isAuthenticated = false;

  //when redirected to /sign-up, we check if the user is authenticated, if yes, we redirect to the home page else we show the signup form {outlet}
  return (
    <>
      {isAuthenticated ? (
      <Navigate to='/' />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            {/* {outlet} is a placeholder for the /sign-up route */}
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  )
}

export default AuthLayout