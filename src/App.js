import { createContext, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

export const myContext = createContext(null);

function App() {
	const [query, setQuery] = useState('');
	const contextValues = {
		query: query,
		setQuery: setQuery,
	};
	return (
		<myContext.Provider values={contextValues}>
			<div className="App">
				<Route path="/">
					<Home />
				</Route>
			</div>
		</myContext.Provider>
	);
}

export default App;
