import React from "react";



// category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)
// name = Column(String, nullable=False)
// description = Column(String)
// price = Column(Float, nullable=False)
// stock = Column(Integer, default=0)
// image_url = Column(String, nullable=True)
const Update = () => {
  // Estado para los campos del formulario
  const [form, setForm] = React.useState({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
    category_id: "",
  });

  // Manejar cambios en los campos
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
 

  // Evento para agregar producto
  
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     if (form.price && isNaN(Number(form.price))) {
    alert("El precio debe ser un número válido");
    setForm((prev) => ({ ...prev, price: "" }));
  }
  if (form.price && Number(form.price) < 0) {
    alert("El precio no puede ser negativo");
    setForm((prev) => ({ ...prev, price: "" }));
  }
  if (form.stock && isNaN(Number(form.stock))) {
    alert("El stock debe ser un número válido");
    setForm((prev) => ({ ...prev, stock: "" }));
  }
  if (form.stock && Number(form.stock) < 0) {
    alert("El stock no puede ser negativo");
    setForm((prev) => ({ ...prev, stock: "" }));
  }

  if (form.category_id && isNaN(Number(form.category_id))) {
    alert("El ID de categoría debe ser un número válido");
    setForm((prev) => ({ ...prev, category_id: "" }));
  }
  if (form.id && isNaN(Number(form.id))) {
    alert("El ID del producto debe ser un número válido");
    setForm((prev) => ({ ...prev, id: "" }));
  }
  if (form.id && Number(form.id) < 1) {
    alert("El ID del producto debe ser un número positivo");
    setForm((prev) => ({ ...prev, id: "" }));
  }

  if (form.category_id && Number(form.category_id) < 1) {
    alert("El ID de categoría debe ser un número positivo");
    setForm((prev) => ({ ...prev, category_id: "" }));
  }
  if (form.image_url && !form.image_url.startsWith("http")) {
    alert("La URL de la imagen debe ser válida");
    setForm((prev) => ({ ...prev, image_url: "" }));
  }
  if (form.image_url && form.image_url.length > 200) {
    alert("La URL de la imagen no puede exceder los 200 caracteres");
    setForm((prev) => ({ ...prev, image_url: "" }));
  }
  if (form.name && form.name.length < 3) {
    alert("El nombre del producto debe tener al menos 3 caracteres");
    setForm((prev) => ({ ...prev, name: "" }));
  }
  if (form.description && form.description.length < 10) {
    alert("La descripción del producto debe tener al menos 10 caracteres");
    setForm((prev) => ({ ...prev, description: "" }));
  }
  if (form.description && form.description.length > 200) {
    alert("La descripción del producto no puede exceder los 200 caracteres");
    setForm((prev) => ({ ...prev, description: "" }));
  }
  if (form.name && form.name.length > 50) {
    alert("El nombre del producto no puede exceder los 50 caracteres");
    setForm((prev) => ({ ...prev, name: "" }));
  }
    try {
      const response = await fetch(`${import.meta.env.VITE_APIURL}/products`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error("Error al agregar el producto");
      }
      alert("Producto agregado correctamente");
      setForm({
        id: "",
        name: "",
        description: "",
        price: "",
        stock: "",
        image_url: "",
        category_id: "",
      });
    } catch (error) {
      alert((error as Error).message);
    }
  };



  return (
    <>
      <div className="item-center justify-center text-black">
        <form
          className="flex flex-col gap-4 max-w-md mx-auto p-4 bg-primary rounded-3xl  shadow "
          onSubmit={handleUpdate}
        >
          <h2 className="text-center text-2xl"> Actualizar</h2>
          <input
            type="id"
            placeholder="id del producto"
            name="id"
            className="border p-2 rounded"
            value={form.id}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Nombre del producto"
            name="name"
            className="border p-2 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Descripción del producto "
            name="description"
            className="border p-2 rounded"
            value={form.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="Precio del producto"
            name="price"
            className="border p-2 rounded"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="Stock del producto"
            name="stock"
            className="border p-2 rounded"
            value={form.stock}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="URL de la imagen"
            name="image_url"
            className="border p-2 rounded"
            value={form.image_url}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="ID de Categoría"
            name="category_id"
            className="border p-2 rounded"
            value={form.category_id}
            onChange={handleChange}
            required
          />
          <div className="flex gap-2 items-center justify-center">
            <button
            type="submit"
            className=" text-white px-4 py-2 rounded btn btn-success "
            >
              Actualizar
            </button>
        
          
             
           
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
