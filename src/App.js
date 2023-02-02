import NavBar from "./NavBar";
import Home from "./pages/Home";
import Login from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import LoggedInPage from "./pages/LoggedInPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./pages/useAuth";

function App() {
  const {isLoading,user} = useAuth()
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route element={<ProtectedRoutes isAuthed={!!user} isLoading={isLoading}/>}>
                <Route path="/loggedinpage" element={<LoggedInPage />} exact/>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
