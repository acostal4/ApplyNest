// /pages/Profile.jsx
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { getSavedJobs, listenForAlerts } from "../lib/firestore";

const Profile = () => {
const { user, logout } = useContext(UserContext);
const [savedCount, setSavedCount] = useState(0);
const [alertCount, setAlertCount] = useState(0);
const [newAlert, setNewAlert] = useState(false);

useEffect(() => {
const fetchSavedJobs = async () => {
try {
const saved = await getSavedJobs();
setSavedCount(saved.length);
} catch (error) {
console.error("Error fetching saved jobs:", error);
}
};

const unsubscribe = listenForAlerts((alerts) => {
setNewAlert(alerts.length > alertCount);
setAlertCount(alerts.length);
});

fetchSavedJobs();

return () => unsubscribe();
}, [alertCount]);

return (
<div className="p-4 max-w-md mx-auto">
<h2 className="text-xl font-bold mb-4">Profile</h2>
<div className="bg-white p-4 rounded shadow">
<p className="text-gray-800 font-medium">Email: {user?.email}</p>
<p className="text-sm text-gray-600 mt-2">
Saved Jobs: <span className="font-semibold">{savedCount}</span>
</p>
<p className="text-sm text-gray-600">
Alerts: <span className="font-semibold">{alertCount}</span>
</p>
{newAlert && (
<div className="mt-2 text-green-600">
<p>New job alert available!</p>
</div>
)}
<button
onClick={logout}
className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
>
Logout
</button>
</div>
</div>
);
};

export default Profile;
