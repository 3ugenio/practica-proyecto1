import type {Product} from "../interfaces/product.interface"



interface InfoProductCard{
    product: Product
}


function handleShowId(product: Product) {
  alert(`ID del producto: ${product.id ?? "No disponible"}`);
}


// const [update, setUpdate] = useState(false)
async function handleDelete(product: Product) {
  if (!product.id) {
    alert("No se encontró el ID del producto");
    return;
  }
  try {
    const response = await fetch(`${import.meta.env.VITE_APIURL}/products/${product.id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al borrar el producto");
    }
    alert("Producto borrado correctamente");
    // Aquí podrías agregar lógica para actualizar la UI, por ejemplo, eliminar la tarjeta del producto
  } catch (error) {
    alert((error as Error).message);
  }
}

function ProductCard({ product }: InfoProductCard) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm  ">
      <figure>
        <img src={product.image_url} alt="IMGProducto" className="p-5" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center  "> {product.name}</h2>
        <p className="text-primary-content">{product.description}</p>
        <div className="card-actions justify-end">
          <div className="grid grid-cols-3 gap-2">
            <button className="btn btn-error btn-sm rounded-3xl" onClick={() => handleDelete(product)}>Eliminar</button>
            <button className="btn btn-success btn-sm rounded-3xl" onClick={() => handleShowId(product)}>Mostrar ID</button>
            <div className="badge badge-outline">Bs.  {product.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
