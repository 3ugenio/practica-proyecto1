import react from "react";
import type {Product} from "../interfaces/product.interface"


interface InfoProductCard{
    product: Product
}

const ProductCard = ({product}: InfoProductCard ) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={product.image_url || undefined} alt="IMGProducto" className="p-5"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center"> {product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Bs.  {product.price}</div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
