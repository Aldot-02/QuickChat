import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";

function App() {
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Navigate to={user ? "/chat" : "/auth"} />}
        />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/auth" />} />
        <Route
          path="/auth"
          element={user ? <Navigate to="/chat" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="/auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        <Route path="/chat" element={user ? <Chat /> : <Navigate to="/auth" />} />
      </Routes>
    </div>
  );
}

export default App;
