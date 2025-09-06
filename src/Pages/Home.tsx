import React from "react";
import ProductCard from "../components/ProductCard";
import type { Product } from "../interfaces/product.interface";
import { useState, useEffect } from "react";

const Home = () => {
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s"
  const [products, setProducts] = useState<Product[]>([
    
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `${import.meta.env.VITE_APIURL}/products`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-primary rounded-4xl p-4 ">
      <div className="card flex flex-col items-center justify-center space-y-4">
        <span className="card-title inline-block text-3xl text-center text-primary-content bg-primary rounded-3xl px-4 py-2">
          Bienvenidos a la tienda
        </span>
        <div className="card-body inline-block text-xl text-center text-primary-content bg-primary rounded-3xl px-4 py-2">
          <div className="inline-block bg-primary text-primary-content rounded-3xl px-4 py-2 text-center">
            Aquí se mostrarán los productos disponibles, sus precios y más
            información relevante.
          </div>
        </div>
        <div className="card-body inline-block text-xl text-center text-primary-content rounded-3xl px-4 py-3 pb-5">
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
