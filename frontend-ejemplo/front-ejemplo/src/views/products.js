import { useEffect, useState } from 'react';
import { Container, Card } from '@mui/material';
import getProducts from '../api/productos.api';


const ProductCard = ({ product }) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.descripcion}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.descripcion}</h3>
        <p className="text-sm text-gray-600">{product.categoria}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">${product.precio}</span>
          <button className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );

export default function Productos() {

    const [products, setProducts] = useState([]);
    console.log("Me traigo el token una vez que estoy logeado")
    const accessToken = sessionStorage.getItem('access-token')
       
    useEffect(() => {
        console.log("Pido la lista de productos con mi token de sesion")
        getProducts(accessToken,setProducts);
    }, [setProducts,accessToken]);

    return (
       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-screen-lg">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
            </div>
        </div>
    )
}