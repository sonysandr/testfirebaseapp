import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const signIn = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = signIn.user;
      console.log(user);
      navigate("/login");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    }
  };

  return (
    <div>
      <h1>Sign in to your Firebase Test Application here</h1>
      <form onSubmit={onSubmitHandler}>
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
