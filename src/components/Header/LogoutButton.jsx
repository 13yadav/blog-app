import { useDispatch } from "react-redux";
import { authService } from "../../appwrite/config";
import { logout } from "../../store/authSlice";

function LogoutButton() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div>
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={logoutHandler}
    >
      Logout
    </button>
  </div>;
}

export default LogoutButton;
