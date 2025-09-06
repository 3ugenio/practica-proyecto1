
import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to={""}
                  className={({ isActive }) =>
                    isActive ? "active bg-primary text-primary-content" : ""
                  }
                >
                  Home{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/products"}
                  className={({ isActive }) =>
                    isActive ? "active bg-primary text-primary-content" : ""
                  }
                >
                  Inventario {" "}
                </NavLink>
              </li>
               <li>
                <NavLink
                  to={"update"}
                  className={({ isActive }) =>
                    isActive ? "active bg-primary text-primary-content" : ""
                  }
                >
                  Actualizar
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Mariño.Inc</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to={""}
                className={({ isActive }) =>
                  isActive ? "active bg-primary text-primary-content" : ""
                }
              >
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  isActive ? "active bg-primary text-primary-content" : ""
                }
              >
                Inventario{" "}
              </NavLink>
            </li>
              <li>
                <NavLink
                  to={"update"}
                  className={({ isActive }) =>
                    isActive ? "active bg-primary text-primary-content" : ""
                  }
                >
                  Actualizar{" "}
                </NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
      </div>
      <main className="container mx-auto px-4 py-8 flex-1">
        <Outlet />
      </main>
      <footer className="text-center py-6 bg-base-100 shadow-sm mt-8">
        <p className="font-semibold">Practica del diplomado fullstack</p>
      </footer>
    </div>
  );
};

export default MainLayout;
