import React from 'react'

// category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)
// name = Column(String, nullable=False)
// description = Column(String)
// price = Column(Float, nullable=False)
// stock = Column(Integer, default=0)
// image_url = Column(String, nullable=True)

const Products = () => {

    return(<>
    <div className='item-center justify-center text-black'>
        
        <form className="flex flex-col gap-4 max-w-md mx-auto p-4 bg-primary rounded-3xl  shadow ">
            <h2 className='text-center text-2xl'> Inventario</h2>
            <input
            type="text"
            placeholder="Nombre del producto"
            name="name"
            className="border p-2 rounded"
            />
            <textarea
            placeholder="Descripción del producto "
            name="description"
            className="border p-2 rounded"
            />
            <input
            type="number"
            placeholder="Precio del producto"
            name="price"
            className="border p-2 rounded"
            step="0.01"
            />
            <input
            type="number"
            placeholder="Stock del producto"
            name="stock"
            className="border p-2 rounded"
            />
            <input
            type="text"
            placeholder="URL de la imagen"
            name="image_url"
            className="border p-2 rounded"
            />
            <input
            type="number"
            placeholder="ID de Categoría"
            name="category_id"
            className="border p-2 rounded"
            />
            <div className="flex gap-2 items-center justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded btn">
                Agregar
            </button>
            <button type="button" className="bg-yellow-500 text-white px-4 py-2 rounded btn">
                Actualizar
            </button>
            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded btn">
                Borrar
            </button>
            </div>
        </form>

    </div>

    </>)

}
export default Products