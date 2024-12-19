import { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar";

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

  return (
    <>
      <section className="grid grid-cols-2">
        <div className="">
          <SideBar />
        </div>
        <div>
          <h1>products</h1>
          <h1>products</h1>
          <h1>products</h1>
          <h1>products</h1>
        </div>
      </section>
    </>
  );
}

export default Home;
