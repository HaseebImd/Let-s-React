import React from 'react';

const products = [
    { id: 1, name: 'Red T-Shirt', texturePath: '/src/textures/red-t-shirt.jpg' },
    // { id: 2, name: 'Blue T-Shirt', texturePath: '/textures/blue-shirt.jpg' },
    // Add more products as needed
];

function ProductList({ onSelectProduct }) {
    return (
        <div>
            <h2>Available T-Shirts</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <button onClick={() => onSelectProduct(product)}>
                            {product.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;