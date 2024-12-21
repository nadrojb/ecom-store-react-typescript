import { useState } from "react";
import { useCart } from "../../context/CartContext";

type cartItemProps = {
  id: number;
  quantity: number;
};

function CartProductCard({ id, quantity }: cartItemProps) {
  const { getItemQuantity, cartItems, removeFromCart } = useCart();
  const [cartItems, setCartItems] = useState([]);


  
  useEffect(() => {
    // Fetch products to map cart items to product data
    async function fetchProducts() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  // Combine cart items with product details
  const cartDetails = cartItems.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id) || {};
    return { ...cartItem, ...product };
  });

  return (
    <>
      <section>
        <div>
          <img src={cartItem.image} alt="" />
          <h3 className="">{cartItem.title}</h3>
          <div className="flex justify-center">
            <button className="bg-gray-300 rounded-md px-2 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in">
              -
            </button>
            <h3 className="pl-2 pr-2">{quantity}</h3>
            <button
              onClick={() => removeFromCart}
              className="bg-gray-300 rounded-md px-2 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in"
            >
              +
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartProductCard;
