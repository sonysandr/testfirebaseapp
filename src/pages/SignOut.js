import { getAuth, signOut } from "firebase/auth";

// SignOut will wrap firebase's signOut function
export const SignOut = async () => {
  const auth = getAuth();

  try {
    await signOut(auth);
    console.log(SignOut);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};
