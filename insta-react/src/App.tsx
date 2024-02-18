import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route path='/sign-in' element={<SigninForm />} />

        {/* private routes */}
        <Route index element={<Home />} />  //index is the starting point/page of the app
      </Routes>
    </main>
  )
}

export default App