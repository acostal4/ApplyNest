// /components/AddAlertForm.jsx
import React, { useState } from "react";
import { addAlert } from "../lib/firestore";

const AddAlertForm = () => {
const [title, setTitle] = useState("");
const [frequency, setFrequency] = useState("daily");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);
setMessage("");

try {
await addAlert({ title, frequency, createdAt: new Date().toISOString() });
setMessage("Alert created successfully!");
setTitle("");
setFrequency("daily");
} catch (error) {
console.error("Error creating alert:", error);
setMessage("Failed to create alert.");
} finally {
setLoading(false);
}
};

return (
<div className="p-4 bg-white rounded shadow mt-4">
<h3 className="font-bold text-lg mb-2">Create Job Alert</h3>
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Alert title"
value={title}
onChange={(e) => setTitle(e.target.value)}
required
className="w-full p-2 mb-2 border rounded"
/>
<select
value={frequency}
onChange={(e) => setFrequency(e.target.value)}
className="w-full p-2 mb-2 border rounded"
>
<option value="daily">Daily</option>
<option value="weekly">Weekly</option>
</select>
<button
type="submit"
disabled={loading}
className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
>
{loading ? "Creating..." : "Add Alert"}
</button>
</form>
{message && <p className="mt-2 text-sm">{message}</p>}
</div>
);
};

export default AddAlertForm;
