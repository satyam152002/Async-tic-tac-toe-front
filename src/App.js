import React, { useEffect, useState } from 'react';
import './App.css';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useLocalStorage } from './util/Hooks';
export const AuthContext=React.createContext()
function App() {
  const[auth,setAuth]=useLocalStorage("auth",false)
  return<>
  <AuthContext.Provider value={{auth,setAuth}}>
    {auth?<PrivateRoute/>:<PublicRoute/>}
  </AuthContext.Provider>
  </>

}

export default App;
