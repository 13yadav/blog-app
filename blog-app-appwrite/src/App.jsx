import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ userData: user }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1 className="text-3xl font-bold underline text-[#E5D0CC]">Loading...</h1>;
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-[#BFACB5]">
      <div className="w-full block">
        <Header />
        <main><Outlet /></main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
