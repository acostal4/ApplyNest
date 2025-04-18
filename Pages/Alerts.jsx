// /pages/Alerts.jsx
import React, { useEffect, useState } from "react";
import { getAlerts } from "../lib/firestore";

const Alerts = () => {
const [alerts, setAlerts] = useState([]);

useEffect(() => {
const fetchAlerts = async () => {
try {
const data = await getAlerts();
setAlerts(data);
} catch (error) {
console.error("Failed to load alerts:", error);
}
};

fetchAlerts();
}, []);

return (
<div className="p-4 max-w-xl mx-auto">
<h2 className="text-2xl font-bold mb-4">Your Job Alerts</h2>
{alerts.length === 0 ? (
<p className="text-gray-600">No alerts found. Add one from the home page!</p>
) : (
<ul className="space-y-4">
{alerts.map((alert) => (
<li
key={alert.id}
className="bg-white p-4 rounded shadow border border-gray-200"
>
<h3 className="font-semibold text-lg">{alert.title}</h3>
<p className="text-sm text-gray-700">{alert.keywords}</p>
</li>
))}
</ul>
)}
</div>
);
};

export default Alerts;
