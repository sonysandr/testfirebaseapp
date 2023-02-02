import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { SignOut } from "./SignOut";



export default function LoggedInPage() {
  const navigate = useNavigate();

  // To get a currently signed-up user, we set an observer on the Auth object.
  // this can also be done using currentUser property of firebase

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.email;
        console.log(uid)
      }
      // user is signed out
      else console.log("User is logged out");
    });
  }, []);

  // Sign out
  const onClickLogoutHanlder = async () => {
    try {
      await SignOut();
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
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
        <p>Email is {}</p>
        <div>
          <button onClick={onClickLogoutHanlder}>Sign Out</button>
        </div>

      </div>
    </div>
  );
}

// before change
// signOut(auth)
//         .then(()=>{
//             // signout Successful
//             navigate('/login')
//             console.log('Signed out successfully')
//         })
//         .catch((error)=>{
//             //An error happened
//         })

//SignOut before change to individual component

// const onClickLogoutHanlder = async () => {
//   try {
//     const signedOut = await signOut(auth);
//     navigate("/login");
//     console.log(signedOut);
//   } catch (error) {
//     throw new Error("Error while signing out");
//   }
// };
