import React from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const SignUp = async (email, password) => {


  try {
    const signUp = await createUserWithEmailAndPassword(auth, email, password);
    return {};
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ..
  }

  return <div>This is where we do sign in</div>;
};
