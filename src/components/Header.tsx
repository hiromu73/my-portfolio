import React from "react";
function Header() {
  return (
    <div className="fixed flex justify-between px-8 w-screen h-16  items-center drop-shadow-2xl border-b shadow-md">
      <h1 className="font-bold text-2xl">HIROMU TOJIMA</h1>
      <div className="flex gap-10">
        <ul className="nav-list flex gap-10">
          <li className="nav-list-item">
            <a>Home</a>
          </li>
          <li className="nav-list-item">
            <a>Profile</a>
          </li>
          <li className="nav-list-item">
            <a>Portfolio</a>
          </li>
          <li className="nav-list-item">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
