// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SavedJobs from "./pages/SavedJobs";
import Alerts from "./pages/Alerts";
import AddAlertForm from "./pages/AddAlertForm";
import Profile from "./pages/Profile";

const App = () => {
return (
<Router>
<Layout>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/saved" element={<SavedJobs />} />
<Route path="/alerts" element={<Alerts />} />
<Route path="/add-alert" element={<AddAlertForm />} />
<Route path="/profile" element={<Profile />} />
</Routes>
</Layout>
</Router>
);
};
