import { Container, Logo, LogoutButton } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      link: "/",
      active: true,
    },
    {
      name: "Login",
      link: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      link: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      link: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      link: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-[#172121] text-[#E5D0CC]">
      <Container>
        <nav className="flex items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.link)}
                    className="inline-block px-6 py-2 duration-200 hover:underline"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
