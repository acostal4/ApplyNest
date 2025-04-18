// /pages/Home.jsx
import React from "react";
import AddAlertForm from "../components/AddAlertForm";

const Home = () => {
return (
<div className="p-4 max-w-xl mx-auto">
<h1 className="text-2xl font-bold mb-4">Welcome to ApplyNest</h1>
<p className="mb-4 text-gray-700">
Set up job alerts to get notified about new opportunities that match your preferences.
</p>
<AddAlertForm />
</div>
);
};

export default Home;
