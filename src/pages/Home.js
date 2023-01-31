import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {

    const pStyle = {
        color : "blue",
         fontSize:'23px',
         padding:'16px 16px'
        }
  return (
    <div>
      <div>
        <h1>Welcome to Your firebase Test Application Home Page</h1>
        <div>
         
          <h3>This is a Test application to to test Authentication using Firebase</h3>
          <p style={pStyle}>
            Authenticating with Firebase makes things easy for both end users
            and developers. Firebase Authentication provides backend services,
            easy-to-use SDKs, and ready-made UI libraries. This allows you to
            focus on your users, not complex infrastructure to support them.
            Firebase supports a lot of ways for users to get authenticated. They
            include authentication through email addresses, third-party
            providers such as Twitter, Facebook, Github, Google, Microsoft, and
            much more.
          </p>
          
        </div>

        <div>
          <p>
            Already have an account? {""}
            <NavLink to="/login">Log in</NavLink>
          </p>{" "}
        </div>
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
