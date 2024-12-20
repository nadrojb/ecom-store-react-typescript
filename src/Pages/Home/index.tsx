import { SetStateAction, useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import { Link } from "react-router";

export type Product = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};
function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts(setProducts: { (value: SetStateAction<Product[]>): void; (arg0: Product): void; }) {
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
        <div className="flex justify justify-between px-8">
          <span className="bg-red-500 rounded-full px-2 text-white absolute right-4 top-2 hidden">0</span>
          <h1 className="text-xl font-medium">LeShop</h1>
          <div className="flex items-center">
            <h2 className="mr-3 text-xl font-medium">Filters</h2>
            <Link to={"/cart"}>
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section className="text-slate-800 fixed top-0 left-0 w-full h-screen z-20  font-sans hidden">
        <div>
          <svg
            className="w-4 mx-6 my-6 float-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </div>
        <div className="mx-auto w-1/2 mt-24">
          <img className="w-40 mx-auto" src="leshop.png" alt="" />
          <form className="mt-10 text-sm text-center">
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

      <section className="grid grid-cols-2 px-6 gap-6 pt-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-14 ">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </section>
    </>
  );
}

export default Home;
