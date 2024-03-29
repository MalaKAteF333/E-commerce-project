// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './Pages/ProductPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"
        component={HomePage}/>
        <Route exact path="./products/:id"
        component={ProductPage}/>
        <Route component={NotFoundPage}/>
    
            </Switch>
        </Router>
    );
}

export default App;


// productItem.js
import React from 'react';
import {Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <Link to={'/products/${producy.id'}>
                
                <h3>{product.name}</h3>
            </Link>
            <p>${product.price}</p>
            {/* Add more product details here*/}
        </div>
    );
};

export default productItem;


// ProductLiat.js
import React, { userState, useEffect } from '../services/api';
import ProductItem from './ProductItem';

const ProductList = () => {
    const [products, setProducts] =
    useState([]);

    useEffect( () => {
        const fetchProducts = async () => {
            const productList = await
            getProductList();
        };
        fetchProducts();
    },

   [] );

   return (
    <div>
        <h2>Products</h2>
        <div className="product-List">
            {products.map(product => (
                <ProductItem key={product.id}
                product={product}/>
            )
                )}
        </div>
    </div>
   )
};

export default ProductList;


// Home.js
import React from 'react';
import ProductList from '../components/ ProductList';

const Home = () => {
    return (
        <div>
            <h1>Welcome to our E-commerce store</h1>
            <ProductList />
        </div>
    );
};

export default Home;


//ProductDetails.js
import React feom 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../services/api';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] =
    useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const ProductDetails = await
            getProductDetails(id),
            setproduct(productDetails);
        };

        fetchProductDetails();
    }, [id]);

    return (
        <div>
            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                    {/* Display more product details*/}
                    </div>
            ) : (
                <p>Loading...</p>
            )}
            
        </div>
    );
        

    
};


export default ProductDetails;



// api.js 
const BASE_URL = 'http://api.example.com';

export const getProductList = async () =>
{
    const response = awit fetch('$ {BASE_URL}/products');
    const data = awit response.json();
    return data;

};

export const getProductDetails = async
(productId) => {
    const resonse = awit fetch('${BASE_URL}/product/${producId}');
    const data = awair response.json();
    return data;
};

// Add more API fubctions for authentication, cart management, checkout, etc.






