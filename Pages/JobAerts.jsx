// /pages/JobAlerts.jsx
import React, { useEffect, useState } from "react";
import { getAlerts } from "../lib/firestore";

const JobAlerts = () => {
const [alerts, setAlerts] = useState([]);

useEffect(() => {
const fetchAlerts = async () => {
try {
const data = await getAlerts();
setAlerts(data);
} catch (error) {
console.error("Error fetching alerts:", error);
}
};

fetchAlerts();
}, []);

return (
<div className="p-4 max-w-2xl mx-auto">
<h2 className="text-xl font-bold mb-4">My Job Alerts</h2>
<div className="space-y-4">
{alerts.map((alert) => (
<div key={alert.id} className="p-4 border rounded shadow bg-white">
<p className="font-medium text-gray-800">{alert.keywords}</p>
<p className="text-sm text-gray-500">Location: {alert.location}</p>
</div>
))}
{alerts.length === 0 && (
<p className="text-gray-500 text-sm">No job alerts found.</p>
)}
</div>
</div>
);
};

export default JobAlerts;
