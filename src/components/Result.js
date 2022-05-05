import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { myContext } from '../App';

function Result() {
	const { query } = useContext(myContext);
	const [product, setProduct] = useState([]);
	const history = useHistory();

	useEffect(() => {
		const getProducts = async () => {
			await fetch(`http://localhost:9000/product/${query}`, {
				method: 'GET',
			})
				.then((data) => data.json())
				.then((d) => setProduct(d));
		};

		const deleteProducts = async () => {
			await fetch(`http://localhost:9000/product/${query}`, {
				method: 'DELETE',
			})
				.then((d) => d.json())
				.then((d) => alert(d.result) & history.push('/'));
		};

		query[0] === 'd' ? deleteProducts() : getProducts();
	}, []);

	if (product.length === 0) {
		return <div className="result-container">No products found</div>;
	}

	return (
		<div className="result-wrapper">
			<div className="result-container">
				Product Results
				{product.map(({ product_name, product_price, product_color, product_material }, index) => (
					<ul key={index}>
						<li>Name - {product_name}</li>
						{product_price ? <li>Price - {product_price}</li> : ''}
						{product_color ? <li>Color - {product_color}</li> : ''}
						<li>Material - {product_material}</li>
					</ul>
				))}
			</div>
		</div>
	);
}
export default Result;
