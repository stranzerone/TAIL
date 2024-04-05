import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/ProfileCreate";
import SelectPage from "./components/SelectPage";
import VerifyEmailPage from "./components/VerifyEmail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile/:userid" element={<Profile />} />
        <Route path="/selectpage/:userid" element={<SelectPage />} />
        <Route path="/verifyEmail/:userid" element={<VerifyEmailPage />} />
      </Routes>
    </div>
  );
}

export default App;
