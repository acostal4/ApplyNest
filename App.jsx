// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alerts from "./pages/Alerts";
import AddAlertForm from "./components/AddAlertForm";
import Profile from "./pages/Profile";
import { UserProvider } from "./context/UserContext";

const App = () => {
return (
<UserProvider>
<Router>
<div className="min-h-screen bg-gray-100">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/alerts" element={<Alerts />} />
<Route path="/add-alert" element={<AddAlertForm />} />
<Route path="/profile" element={<Profile />} />
</Routes>
</div>
</Router>
</UserProvider>
);
};

export default App;
