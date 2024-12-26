import { SetStateAction, useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import { Link } from "react-router";
import { useCart } from "../../context/CartContext";

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
function Home({}) {
  const [products, setProducts] = useState<Product[]>([]);
  const { cartQuantity } = useCart();
  const [filtersState, setFiltersState] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getProducts(setProducts) {
    setIsLoading(true);
    const json = await fetch(`https://fakestoreapi.com/products`);
    const productsData: Product = await json.json();
    setProducts(productsData);
    setIsLoading(false);
  }

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <>
      <section className="py-5 border-b shadow-md w-full">
        <div className="flex justify justify-between px-8">
          <h1 className="text-xl font-medium">LeShop</h1>
          <div className="flex items-center">
            {cartQuantity === 0 ? (
              <>
                <Link to={"/cart"}>
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </Link>
              </>
            ) : (
              <>
                <span className="bg-red-500 rounded-full px-2 text-white absolute right-4 top-2">
                  {cartQuantity}
                </span>
                <Link to={"/cart"}>
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
      <section
        className={`${filtersState} text-slate-800 fixed top-0 left-0 w-full h-screen z-20 bg-white font-sans hidden`}
      >
        <div>
          <button
            onClick={() => setFiltersState("hidden")}
            className={`cursor-pointer float-right mx-6 my-6 `}
          >
            <svg
              className="w-4 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          </button>
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
            <input
              type="submit"
              value="Apply filters"
              className="bg-gray-300 cursor-pointer rounded-md px-8 py-3 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in mt-4"
            />
          </form>
        </div>
      </section>

      {isLoading ? (
        <div className="mx-auto text-center mt-10">
          <h3>
            Products loading...
            <span className="absolute">
              <svg
                aria-hidden="true"
                className=" ml-4 w-6 h-6 text-gray-200 animate-spin dark:text-gray-300 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </span>
          </h3>
        </div>
      ) : null}
      <section className="grid grid-cols-2 px-6 gap-6 pt-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-14 ">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </section>
    </>
  );
}

export default Home;
