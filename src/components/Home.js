import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { myContext } from '../App';

function Home() {
	const history = useHistory();
	const { query, setQuery } = useContext(myContext);
	const [from, setFrom] = useState(0);
	const [to, setTo] = useState(0);
	const [not_from, setNot_From] = useState(0);
	const [not_to, setNot_To] = useState(0);
	return (
		<div>
			<div className="home-wrapper">
				<div className="home-container">
					<div className="tab-side">
						{/* To get all the products */}
						<Button
							variant="text"
							color="primary"
							onClick={() => setQuery('/') & history.push('/result')}
						>
							Get All Products
						</Button>

						{/* To get all the product's name and material */}
						<Button variant="text" color="primary">
							Get All Products name & material
						</Button>

						{/* To get products between x and y */}
						<form
							className="get-bw-price"
							onSubmit={() => setQuery(`?from=${from}&to=${to}`) & history.push('/result')}
						>
							<h3>Get products between x and y</h3>
							<TextField
								variant="outlined"
								label="from"
								type="number"
								required
								onChange={(event) => setFrom(event.target.value)}
							/>
							<TextField
								variant="outlined"
								label="to"
								type="number"
								required
								onChange={(event) => setTo(event.target.value)}
							/>
							<Button variant="text" color="primary" type="submit">
								Get All Products
							</Button>
						</form>

						{/* To Get products not between x and y */}
						<form
							className="get-nbw-price"
							onSubmit={() => setQuery(`?from=${not_from}&to=${not_to}`) & history.push('/result')}
						>
							<h3>Get products not between x and y</h3>
							<TextField
								variant="outlined"
								label="from"
								type="number"
								required
								onChange={(event) => setNot_From(event.target.value)}
							/>
							<TextField
								variant="outlined"
								label="to"
								type="number"
								required
								onChange={(event) => setNot_To(event.target.value)}
							/>
							<Button variant="text" color="primary" type="submit">
								Get All Products
							</Button>
						</form>

						{/* To Get products greater than x */}
						<form className="get-greater-price">
							<h3>Get products greater than x</h3>
							<TextField
								variant="outlined"
								label="greater than"
								type="number"
								required
								onChange={(event) => setFrom(event.target.value)}
							/>
							<Button variant="text" color="primary" type="submit">
								Get All Products
							</Button>
						</form>

						{/* To Get products with id */}
						<form className="get-by-id">
							<h3>Get products with id</h3>
							<TextField
								variant="outlined"
								label="id"
								type="number"
								required
								onChange={(event) => setFrom(event.target.value)}
							/>
							<Button variant="text" color="primary" type="submit">
								Get All Products
							</Button>
						</form>

						{/* To Get products with material */}
						<form className="get-by-material">
							<h3>Get products with material </h3>
							<TextField
								variant="outlined"
								label="material name"
								type="string"
								required
								onChange={(event) => setFrom(event.target.value)}
							/>
							<Button variant="text" color="primary" type="submit">
								Get All Products
							</Button>
						</form>

						{/* To Get products where colr and price */}
						<form className="get-color-price">
							<h3>Get products where colr and price</h3>
							<TextField
								variant="outlined"
								label="color"
								type="string"
								required
								onChange={(event) => setFrom(event.target.value)}
							/>
							<TextField
								variant="outlined"
								label="price"
								type="number"
								required
								onChange={(event) => setTo(event.target.value)}
							/>
							<Button variant="text" color="primary" type="submit">
								Get All Products
							</Button>
						</form>

						{/* To Delete products with price */}
						<form className="delete-by-price">
							<h3>Delete products with price </h3>
							<TextField
								variant="outlined"
								label="price"
								type="number"
								required
								onChange={(event) => setFrom(event.target.value)}
							/>
							<Button variant="text" color="primary" type="submit">
								Get All Products
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;
