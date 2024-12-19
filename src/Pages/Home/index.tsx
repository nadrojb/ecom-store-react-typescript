import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

type products


  async function getProducts(setProducts) {
    const json = await fetch(`https://fakestoreapi.com/products`);
    const productsData = await json.json();
    setProducts(productsData);
    console.log(products);
    
  }

  useEffect(() => {
    getProducts(setProducts);
  }, []);
 

  return <>
  
  </>;
}

export default Home;
