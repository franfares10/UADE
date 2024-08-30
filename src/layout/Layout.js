import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Welcome to Our Website</h1>
            <nav>
              <ul className="flex">
                <li className="mr-6">
                  <Link to="/" className="text-white hover:text-blue-300 transition-colors">Home</Link>
                </li>
                <li className="mr-6">
                  <Link to="/about" className="text-white hover:text-blue-300 transition-colors" state={{ejemplo: 'Prop enviada por el state'}}>About</Link>
                </li>
                <li className="mr-6">
                  <Link to="/contact" className="text-white hover:text-blue-300 transition-colors">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow p-4">
          <Outlet />
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2024 Company Name</p>
        </footer>
      </div>
    );
  };
  
  export default Layout;