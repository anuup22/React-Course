import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* public routes //routes that everyone can see */} 
                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SigninForm />} />
                    <Route path='/sign-up' element={<SignupForm />} />
                </Route> 

                {/* private routes //routes that only authenticated users can see */} 
                <Route element={<RootLayout />}>
                    {/* index means that this is the starting page of the route */}
                    <Route index element={<Home />} />
                </Route>
            </Routes>

            <Toaster />
        </main>
    )
}

export default App