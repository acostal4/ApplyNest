import { useState } from 'react';
import Navbar from './components/Navbar';

const App = () => {
const [page, setPage] = useState('home');

const renderPage = () => {
switch (page) {
case 'home':
return <div>Welcome to ApplyNest!</div>;
case 'add':
return <div>This is the Add Alert page.</div>;
case 'alerts':
return <div>Here are your Job Alerts.</div>;
case 'profile':
return <div>This is your Profile page.</div>;
default:
return <div>Welcome to ApplyNest!</div>;
}
};

return (
<div>
<Navbar onNavigate={setPage} />
<main className="p-4">
{renderPage()}
</main>
</div>
);
};

export default App;
