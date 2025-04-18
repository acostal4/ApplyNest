import React from "react";

const Navbar = ({ onNavigate }) => {
return (
<nav className="bg-blue-600 p-4 text-white flex justify-around">
<button onClick={() => onNavigate("home")} className="hover:underline">
Home
</button>
<button onClick={() => onNavigate("add")} className="hover:underline">
Add Alert
</button>
<button onClick={() => onNavigate("alerts")} className="hover:underline">
Job Alerts
</button>
<button onClick={() => onNavigate("profile")} className="hover:underline">
Profile
</button>
</nav>
);
};

export default Navbar;
