import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLoginHandler = async (e) => {
    e.preventDefault();

    try {
      const signIn = await signInWithEmailAndPassword(auth, email, password);
      const user = signIn.user;
      console.log(user);
      navigate("/Loggedinpage");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.error;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <div>
      <h1>Login to Your Firebase Test Application here</h1>
      <div>
        <form onSubmit={onSubmitLoginHandler}>
          <div>
            Email
            <input
              type="email"
              label="Email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            Password
            <input
              type="password"
              label="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <div>
          <p>
            No Account yet? {""}
            <NavLink to="/signup">SignUp</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

// .then before being changed
// .then((userCredential)=>{
//     const user =userCredential.user
//     console.log(user)
//     navigate('/Loggedinpage')
//  })

// .catch before being changed
// .catch((error)=>{
//     const errorCode = error.code
//     const errorMessage = error.error
//     console.log(errorCode, errorMessage);
// }

// )
