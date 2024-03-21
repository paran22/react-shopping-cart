import { Outlet } from 'react-router-dom';

function App() {
	return (
		<main>
			<header>header</header>
			<Outlet />
		</main>
	);
}

export default App;
