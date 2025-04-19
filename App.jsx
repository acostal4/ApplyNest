import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddAlert from './components/AddAlert';
import JobAlerts from './components/JobAlerts';
import Profile from './components/Profile';

const App = () => {
const [page, setPage] = useState('home');

const renderPage = () => {
switch (page) {
case 'home':
return <Home />;
case 'add':
return <AddAlert />;
case 'alerts':
return <JobAlerts />;
case 'profile':
return <Profile />;
default:
return <Home />;
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
