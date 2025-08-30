import React from "react";
import ProductCard from "../components/ProductCard";
import type { Product } from "../interfaces/product.interface";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      name: "Pan",
      description: "Pan hecho en la mañana",
      id: 1,
      category_id: 1,
      stock: 1,
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s",
      price: 20,
    },
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `${import.meta.env.VITE_APIURL}/products`;
    };
  }, []);

  return (
    <div className="item-center justify-center">
      <div className="card flex flex-col items-center justify-center space-y-4">
        <span className=" card-title inline-block text-3xl text-center text-primary-content bg-primary rounded-3xl px-4 py-2">
          Bienvenidos a la tienda
        </span>
        <div className="card-body inline-block text-xl text-center text-primary-content bg-primary rounded-3xl px-4 py-2">
          <div className="inline-block bg-primary text-primary-content rounded-3xl px-4 py-2 text-center">
            Aquí se mostrarán los productos disponibles, sus precios y más
            información relevante.
          </div>
        </div>
        <div className="card-body inline-block text-xl text-center text-primary-content  rounded-3xl px-4 py-2">
          <div className=" inline-block bg-primary text-primary-content rounded-3xl px-4 py-2 ">
            Acá se mostrará los productos
            {products.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
