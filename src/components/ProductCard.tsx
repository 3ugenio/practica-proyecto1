import react from "react";


const ProductCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src=""
          alt="IMGProducto"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">
          Nombre del producto {}
          
        </h2>
        <p>
            descripcion {}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Precio</div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard 
