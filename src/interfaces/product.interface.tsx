// category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)
// name = Column(String, nullable=False)
// description = Column(String)
// price = Column(Float, nullable=False)
// stock = Column(Integer, default=0)
// image_url = Column(String, nullable=True)
export interface Product{
    id: number,
    name: string,
    description: string,
    price: number,
    category_id:number,
    stock: number,
    image_url:string ,
    
}

