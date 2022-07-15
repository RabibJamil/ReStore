import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";




export default function Catalog(){

    const [products, setProdusts] = useState<Product[]>([]);

useEffect(() => {
  fetch('http://localhost:5000/api/products')
  .then(response => response.json())
  .then(data => setProdusts(data))
},[])

    return(
        
        <>
            <ProductList products={products}/>
        </>
      
        
    )
}