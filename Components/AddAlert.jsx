
Luis Acosta <luisacostaf4@gmail.com>
7:13 PM (0 minutes ago)
to me

import { useState } from 'react';

const AddAlert = () => {
const [title, setTitle] = useState('');
const [location, setLocation] = useState('');
const [frequency, setFrequency] = useState('daily');

const handleSubmit = (e) => {
e.preventDefault();
const newAlert = { title, location, frequency };
console.log('Alert created:', newAlert);
// In the next step, you'll save this to Firestore
setTitle('');
setLocation('');
setFrequency('daily');
};

return (
<div>
<h1 className="text-2xl font-bold mb-4">Create a Job Alert</h1>
<form onSubmit={handleSubmit} className="space-y-4 max-w-md">
<div>
<label className="block mb-1 font-medium">Job Title / Keywords</label>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
className="w-full border rounded px-3 py-2"
placeholder="e.g. Sales, Marketing Assistant"
required
/>
</div>

<div>
<label className="block mb-1 font-medium">Location</label>
<input
type="text"
value={location}
onChange={(e) => setLocation(e.target.value)}
className="w-full border rounded px-3 py-2"
placeholder="e.g. Remote, Dallas, TX"
required
/>
</div>

<div>
<label className="block mb-1 font-medium">Alert Frequency</label>
<select
value={frequency}
onChange={(e) => setFrequency(e.target.value)}
className="w-full border rounded px-3 py-2"
>
<option value="daily">Daily</option>
<option value="weekly">Weekly</option>
</select>
</div>

<button
type="submit"
className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
Save Alert
</button>
</form>
</div>
);
};

export default AddAlert;
