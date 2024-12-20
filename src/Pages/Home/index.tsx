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
      <section className="py-5 border-b shadow-md w-full">
        <div className="flex justify justify-between px-4">
          <h1 className="text-xl font-medium">LeShop</h1>
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </div>
      </section>
      <section className="grid grid-cols-2 text-slate-800 font-sans">
        <div className="grid w-4/12 ml-4 mt-16">
          <img className="w-52" src="leshop.png" alt="" />
          <div className="border-b border-slate-400 w-52 mt-5"></div>
          <h2 className="mt-3">
            Cart{" "}
            <span className="ml-2 bg-red-600 text-white rounded-full px-1 font-semibold text-lg">
              0
            </span>
          </h2>
          <div className="border-b border-slate-400 w-52 mt-3"></div>

          <form className="mt-3">
            <div className="mt-2">
              <label className="mr-4" htmlFor="electronics">
                Electronics
              </label>
              <input type="checkbox" name="electronics" id="" />
            </div>
            <div className="mt-2">
              <label className="mr-4" htmlFor="jewelry">
                Jewelry
              </label>
              <input type="checkbox" name="jewelry" id="" />
            </div>
            <div className="mt-2">
              <label className="mr-4" htmlFor="mens">
                Men's clothing
              </label>
              <input type="checkbox" name="mens" id="" />
            </div>
            <div className="mt-2">
              <label className="mr-4" htmlFor="womens">
                Womens clothing
              </label>
              <input type="checkbox" name="womens" id="" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
