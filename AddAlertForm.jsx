// /components/AddAlertForm.jsx
import React, { useState } from "react";
import { addAlert } from "../lib/firestore";

const AddAlertForm = () => {
const [title, setTitle] = useState("");
const [frequency, setFrequency] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();

// Reset messages
setError("");
setSuccess("");

if (!title || !frequency) {
setError("Please provide both a title and frequency.");
return;
}

try {
await addAlert({ title, frequency });
setSuccess("Job alert added successfully!");
setTitle("");
setFrequency("");
} catch (err) {
setError("Something went wrong. Please try again.");
console.error("Error adding alert:", err);
}
};

return (
<div className="p-4 bg-white rounded shadow">
<h2 className="text-xl font-bold mb-4">Create a New Job Alert</h2>

{error && <p className="text-red-600 mb-2">{error}</p>}
{success && <p className="text-green-600 mb-2">{success}</p>}

<form onSubmit={handleSubmit}>
<div className="mb-4">
<label htmlFor="title" className="block text-sm font-medium">
Alert Title
</label>
<input
id="title"
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
className="w-full p-2 border border-gray-300 rounded"
placeholder="e.g. Remote SDR Jobs"
/>
</div>

<div className="mb-4">
<label htmlFor="frequency" className="block text-sm font-medium">
Frequency
</label>
<select
id="frequency"
value={frequency}
onChange={(e) => setFrequency(e.target.value)}
className="w-full p-2 border border-gray-300 rounded"
>
<option value="">Select Frequency</option>
<option value="daily">Daily</option>
<option value="weekly">Weekly</option>
<option value="monthly">Monthly</option>
</select>
</div>

<button
type="submit"
className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
>
Add Alert
</button>
</form>
</div>
);
};

export default AddAlertForm;
