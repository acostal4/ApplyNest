// components/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
return (
<div className="min-h-screen bg-gray-100">
<nav className="bg-white shadow p-4 flex justify-between">
<div className="font-bold text-lg">ApplyNest</div>
<div className="space-x-4">
<Link to="/" className="hover:underline">Home</Link>
<Link to="/saved" className="hover:underline">Saved</Link>
<Link to="/alerts" className="hover:underline">Alerts</Link>
<Link to="/add-alert" className="hover:underline">Add Alert</Link>
<Link to="/profile" className="hover:underline">Profile</Link>
</div>
</nav>
<main className="p-4">{children}</main>
</div>
);
};

export default Layout;
