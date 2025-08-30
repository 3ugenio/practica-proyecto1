import react from "react"
import { NavLink, Outlet } from "react-router"

const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>

      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><NavLink 
                to={'/counter'}
                className={({ isActive } ) => isActive ? 'active bg-primary text-primary-content' : ''}
              >Contador </NavLink></li>
              <li>
                 <NavLink 
                to={'/task-manager'}
                className={({ isActive } ) => isActive ? 'active bg-primary text-primary-content' : ''}
              >Task Manager </NavLink>
              </li>
              <li>
                 <NavLink 
                to={'/cinema/now-playing'}
                className={({ isActive } ) => isActive ? 'active bg-primary text-primary-content' : ''}
              >Cinema</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink 
                to={'/counter'}
                className={({ isActive } ) => isActive ? 'active bg-primary text-primary-content' : ''}
              >Contador </NavLink>
            </li>
            <li>
              <NavLink 
                to={'/task-manager'}
                className={({ isActive } ) => isActive ? 'active bg-primary text-primary-content' : ''}
              >Task Manager </NavLink>
            </li>
            <li>
                 <NavLink 
                to={'/cinema/now-playing'}
                className={({ isActive } ) => isActive ? 'active bg-primary text-primary-content' : ''}
              >Cinema</NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      <main className='container mx-auto px-4 py-8 flex-1'>
        <Outlet />
      </main>



      <footer className='text-center py-6 bg-base-100 shadow-sm mt-8'>
        <p className='font-semibold'>Desarrollado con React 19 + TypeScript + Vite + Tailwind CSS + DaisyUI</p>
      </footer>
      
    </div>
  )
}

export default MainLayout
