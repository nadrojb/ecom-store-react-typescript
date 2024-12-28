import { Link } from "react-router-dom";
import CartProductCard from "../../Components/CartProductCard";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cartItems } = useCart();

  return (
    <>
      <section className="py-5 border-b shadow-md w-full">
        <div className="flex justify-between px-8">
          <Link to={"/"}>
            <svg
              className="w-7 bg-gray"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z" />
            </svg>
          </Link>
          <h2 className="text-xl font-medium">Cart</h2>
        </div>
      </section>

      <div>
        {cartItems.map((item) => (
          <CartProductCard
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <div id="mobile-subtotal-section" className="bg-gray-200 rounded-tl-sm rounded-tr-sm px-4 py-4 fixed bottom-0 w-full">
        <div className="flex justify-between text-sm sm:text-lg">
          <h4 className="text-gray-600">SUBTOTAL</h4>
          <h4 className="font-semibold">$109.00</h4>
        </div>
        <div>
          <button className="w-full text-center bg-green-600 rounded-sm text-sm h-10 my-4 sm:text-lg">
            CHECKOUT
          </button>
          <Link to={"/"}>
            <p className="text-center text-xs text-gray-600 underline sm:text-sm">
              Continue Shopping
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
