import { Header } from '@components/layout';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<main>
			<Header />
			<Outlet />
		</main>
	);
}

export default App;
