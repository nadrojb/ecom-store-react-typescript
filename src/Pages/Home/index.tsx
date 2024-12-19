import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };

  async function getProducts(setProducts) {
    const json = await fetch(`https://fakestoreapi.com/products`);
    const productsData: Product = await json.json();
    setProducts(productsData);
    console.log(products);
  }

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return <></>;
}

export default Home;
