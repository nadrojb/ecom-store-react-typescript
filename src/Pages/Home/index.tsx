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
    <section>
      
    </section>
      <section className="grid grid-cols-2 text-slate-800 font-sans">
        <div className="grid w-4/12 ml-4 mt-16">
          <img className="w-52" src="leshop.png" alt="" />
          <div className="border-b border-slate-400 w-52 mt-5"></div>
          <h2 className="mt-3">
            Cart <span className="ml-2 bg-red-600 text-white rounded-full px-1 font-semibold text-lg">0</span>
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
