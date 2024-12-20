import React, { useState } from 'react';
import ModelViewer from './ModelViewer';
import ProductList from './ProductList';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseViewer = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1>T-Shirt Store</h1>
      <ProductList onSelectProduct={handleProductSelect} />
      {selectedProduct && (
        <ModelViewer
          modelPath="/src/models/mannequin_with_suit..glb"
          texturePath={selectedProduct.texturePath}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
}

export default App;