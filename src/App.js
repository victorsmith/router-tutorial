import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
		<div className="App">
			<h1>Bookkeeper</h1>
			<nav
				style={{
					borderBottom: '1px solid #ccc',
					paddingBottom: '10px',
				}}
			>
				<Link to="/invoices">Invoices</Link> |{' '}
				<Link to="/expenses">Expenses</Link>
			</nav>

			<Outlet />
		</div>
  );
}

export default App;
