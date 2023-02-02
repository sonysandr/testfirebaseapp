// our custom hook to know whether our user is authed into our component
// all react hooks need to start with use so useAuth

import { useState, useEffect } from "react";
import { addAuthListener } from "./addAuthListener";
import { getCurrentUser } from "./getCurrentUser";

export const useAuth = () => {
  // we'll have a state variable called authInfo and setAuthInfo
  // we can pass a function to useState() hook set the initial state
  const [authInfo, setAuthInfo] = useState(() => {
    
    // this authInfo state variable will have two properties ->isLoading and user

    // now we want the initial state of isLoading to be true and there is no user so,
    // first we'll get the current user using the getCurrentUser wrapper function we created
    // which uses firebase's currentUser property
    const user = getCurrentUser();
    // and if there is  user we need to set isloading to false so we set it to !user
    const isLoading = !user;
    // and finally we return an object that contains both isLoading and user variables as properties
    return { isLoading, user };
  });

  // Now to have our hook subscribed to auth related changes in our application
  // we use useEffect() hook
  useEffect(() => {
    const unSubscribe = addAuthListener((user) => {
      setAuthInfo({ isLoading: false, user });
    });
    return unSubscribe;
  }, []);

  return authInfo;
};
