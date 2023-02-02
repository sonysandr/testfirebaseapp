import { getAuth, onAuthStateChanged } from "firebase/auth";

// addAuthListener will use firebase's onAuthStateChanged function
// this wont be an async because it uses a callback to listen continously
export const addAuthListener = (callback) => {
  const auth = getAuth();

  const onChange = (user) => {
    if (user) {
      // User is signed in
      // see docs for a list of available properties
      callback({});
      // we can later add properties if we want in the future
    } else {
      callback(null);
      // signifies there is no current user
    }
    //------------------------------------------------------
  };
  return onAuthStateChanged(auth, onChange);
};

// callback function
// A callback function is a function passed into another function as an argument,
//which is then invoked inside the outer function to complete some kind of routine or action.
