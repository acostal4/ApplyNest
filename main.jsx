// /main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import AddAlertForm from "./pages/AddAlertForm";
import Alerts from "./pages/Alerts";
import Profile from "./pages/Profile";

const App = () => {
return (
<>
<Navbar />
<main className="p-4">
<h1 className="text-2xl font-bold">Welcome to ApplyNest</h1>
{/* You can choose which page to show here temporarily */}
{/* <AddAlertForm /> */}
{/* <Alerts /> */}
{/* <Profile /> */}
</main>
</>
);
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
