import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
    // To get a currently signed-up user, we set an observer on the Auth object.

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.id;
        console.log("uid", uid);
      }
      // user is signed out
      else console.log("User is logged out");
    });
  }, []);

  const onClickLogoutHanlder = () => {
        signOut(auth)
        .then(()=>{
            // signout Successful
            navigate('/login')
            console.log('Signed out successfully')
        })
        .catch((error)=>{
            //An error happened
        })
  }

  return (
    <div >
      <div>
        <h1>Welcome to Your firebase Test Application Home Page</h1>

        <p>
          To sign out a user, the signOut method is called from Firebase. After
          signing in to the Home route, there will be a button to sign out
          whenever the Logout button is clicked. The button should have an
          onClick event that calls the signOut method from Firebase auth. A
          success message will be displayed on the console if the sign out is
          successful.
        </p>
        <div>
            <button onClick={onClickLogoutHanlder}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}
