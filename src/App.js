import HomePage from "Pages/HomePage";
import LoginPage from "Pages/LoginPage";
import ProfilePage from "Pages/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
