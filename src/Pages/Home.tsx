import React from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
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
            <ProductCard></ProductCard>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
