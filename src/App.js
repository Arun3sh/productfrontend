import { createContext, useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Result from './components/Result';

export const myContext = createContext(null);

function App() {
	const [query, setQuery] = useState('');
	const contextValues = {
		query: query,
		setQuery: setQuery,
	};
	return (
		<myContext.Provider value={contextValues}>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/result">
						<Result />
					</Route>
				</Switch>
			</div>
		</myContext.Provider>
	);
}

export default App;
