import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import PageNotFound from "./components/pages/pagenotfound/PageNotFound";
import LoginPage from "./components/pages/Loginpage/LoginPage";
import SigninPage from "./components/pages/Signin/SigninPage";
import SingupPage from "./components/pages/Signup/SingupPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="180777118254-hm9p1q6hl922m9hskm0qsh0djo25jjtr.apps.googleusercontent.com">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/Homepage" element={<Homepage />}></Route>
            <Route path="/pagenotfound" element={<PageNotFound />}></Route>
            <Route path="/SigninPage" element={<SigninPage />}></Route>
            <Route path="/SingupPage" element={<SingupPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
