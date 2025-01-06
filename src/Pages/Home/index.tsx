import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import { Link } from "react-router";
import { useCart } from "../../context/CartContext";


export type ProductCardProps = {
  product: Product;  
};


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
  const [modalState, setModalState] = useState("hidden");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getProducts(setProducts: (products: Product[]) => void) {
    setIsLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products${category}`);
    const productsData: Product[] = await response.json(); 
    setProducts(productsData);
    setIsLoading(false);
  }
  

  useEffect(() => {
    getProducts(setProducts);
  }, [category]);

  return (
    <>
      <section className="py-5 border-b shadow-md w-full fixed z-10 bg-white top-0">
        <div className="flex justify justify-between px-8 max-w-screen-2xl mx-auto">
          <h1 className="text-xl font-medium tracking-tighter">LeShop</h1>
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
                <span className="bg-red-500 rounded-full px-2 text-white relative -right-10 -top-4">
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
      <div
        id="filetering-modal"
        className={`flex flex-col px-10 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-7 w-52 text-center space-y-2 font-medium rounded-md bg-gray-100 shadow-sm ${modalState}`}
      >
        <button
          className=" hover:underline active:underline cursor-pointer"
          onClick={() => {
            setCategory("");
            setModalState("hidden");
          }}
        >
          All products
        </button>
        <button
          className=" hover:underline active:underline cursor-pointer"
          onClick={() => {
            setCategory("/category/electronics");
            setModalState("hidden");
          }}
        >
          Electronics
        </button>
        <button
          className="hover:underline active:underline cursor-pointer"
          onClick={() => {
            setCategory("/category/jewelery");
            setModalState("hidden");
          }}
        >
          Jewelry
        </button>
        <button
          className="hover:underline active:underline cursor-pointer"
          onClick={() => {
            setCategory("/category/men\'s clothing");
            setModalState("hidden");
          }}
        >
          Men's Clothing
        </button>
        <button
          className="hover:underline active:underline cursor-pointer"
          onClick={() => {
            setCategory("/category/women\'s clothing");
            setModalState("hidden");
          }}
        >
          Womens Clothing
        </button>
      </div>

      {isLoading ? (
        <div className="mx-auto text-center mt-24">
          <h3>
            Products loading...
            <span className="absolute">
              <svg
                aria-hidden="true"
                className=" ml-4 w-6 h-6 text-gray-200 animate-spin dark:text-gray-300 fill-black"
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
      ) : (
        <div className="">
          <p
            onClick={() => setModalState("")}
            className="mt-24 ml-auto font-medium text-sm border border-gray-700 text-gray-800 w-20 pt-1 pb-1 text-center mr-6 rounded-md cursor-pointer  transition "
          >
            Filters <span className="text-xs hover:text">&#9660;</span>
          </p>
        </div>
      )}

      <section
        onClick={() => setModalState("hidden")}
        className="grid grid-cols-2 px-6 gap-6 pt-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-14 max-w-screen-2xl mx-auto "
      >
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </section>
    </>
  );
}

export default Home;
