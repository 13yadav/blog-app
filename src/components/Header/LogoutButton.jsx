import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
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
      className="bg-[#BFACB5] hover:bg-[#E5D0CC] text-[#444554] font-bold py-2 px-4 rounded"
      onClick={logoutHandler}
    >
      Logout
    </button>
  </div>;
}

export default LogoutButton;
