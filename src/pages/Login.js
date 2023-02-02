

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LogIn = async (email, password) => {
  const auth = getAuth();
  try {
   const result =  await signInWithEmailAndPassword(auth, email, password);
    return {};
  } catch (error) {
    throw new Error(error.message);
  }

 
};
