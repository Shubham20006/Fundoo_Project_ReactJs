import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signin from '../Pages/SignIn/Signin';
import Signup from '../Pages/SignUp/Signup';
import Dashboard from '../Components/Dashboard/Dashboard';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes >

        <Route exact path={"/"} element={<AuthRoute><Signin/></AuthRoute>}/>
        <Route path={"/signup"} element={<AuthRoute><Signup/></AuthRoute>}/>
        <Route path={"/Dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default Router
