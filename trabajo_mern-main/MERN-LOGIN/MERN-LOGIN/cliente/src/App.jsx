import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function app(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<h1>Home page</h1>} />
          <Route path='/login'element={<LoginPage/>} />
          <Route path='/register'element={<RegisterPage/>} />
          <Route path='/tasks'element={<h1>Tasks page</h1>} />
          <Route path='/ass-task'element={<h1>New Task</h1>} />
          <Route path='/tasks/:is'element={<h1>Update Task</h1>} />
          <Route path='/profile'element={<h1>Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default app