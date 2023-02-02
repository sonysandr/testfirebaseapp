import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes({isLoading,isAuthed,...props}) {
  if(isLoading){
    return <div>Loading...</div>
  }
  if(!isAuthed){
    return <Navigate to="/login" />
  }

  return  <Outlet {...props} /> 
}


// we have written this ProtectedRoutes Component

// now this component takes an isAuthed prop , if true behaves like a regular Route 
// and if not true ,it navigates to the login route 

// it also takes in an isLoading prop so that it can display some Loading message while auth logic is processing

