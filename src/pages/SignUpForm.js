import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
//import { createUserWithEmailAndPassword } from "firebase/auth";
//import { auth } from "../firebase";
import { SignUp } from "./SignUp";

export default function SignUpForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitSignUpHandler = async (e) => {
    e.preventDefault();

    try {
      await SignUp(email, password);
      navigate("/login");
    } catch (error) {
      alert(error.message);
      // ..
    }
  };

  return (
    <div>
      <h1>Sign in to your Firebase Test Application here</h1>
      <form onSubmit={onSubmitSignUpHandler}>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            label="email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            label="create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />
        </div>
        <button type="submit">SignUp</button>
      </form>
      <p>
        Already have an account? {""}
        <NavLink to="/login">Log in</NavLink>
      </p>
    </div>
  );
}

// before change
// .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user);
//         navigate("/login");
//       })

// before change = .catch
// .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         // ..
//       });
