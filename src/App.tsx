import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';

function App() {
	return (
		<main>
			<Header />
			<Outlet />
		</main>
	);
}

export default App;
