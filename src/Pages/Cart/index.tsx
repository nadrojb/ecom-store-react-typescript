import { Link } from "react-router-dom";
import CartProductCard from "../../Components/CartProductCard";
import { useCart } from "../../context/CartContext";
import FormatPrice from "../../Utilities/FormatPrice";

function Cart() {
  const { cartItems, subTotal, cartQuantity } = useCart();

  return (
    <>
      <section className="py-5 border-b shadow-md w-full fixed z-10 bg-white top-0 ">
        <div className="flex justify-between px-8 max-w-screen-2xl mx-auto">
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
      {cartQuantity === 0 ? (
        <>
          <div className="mx-auto text-center mt-24">
            <h2 className="text-2xl">Your Cart is Empty.</h2>
          </div>
        </>
      ) : (
        <>
        <div className="text-center text-xl font-medium mt-24 sm:text-2xl md:text-3xl md:mt-28">
        <span className="bg-black rounded-full py-1 px-2 text-white text-sm relative left-28 -top-3 sm:left-32 sm:-top-5 md:left-40 md:-top-7  ">
                  {cartQuantity}
                </span>
          Your Cart
        </div>
        <section className="lg:flex lg:space-x-8 lg:px-6 lg:mt-8 max-w-screen-2xl mx-auto">
          <div className="lg:w-9/12">
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
            <div className="bg-gray-200  px-4 py-4 mx-2 mb-4 rounded-md sm:w-2/3 sm:mx-auto lg:w-3/12 lg:h-fit">
              <div className="flex justify-between text-sm sm:text-lg">
                <h4 className="text-gray-900">SUBTOTAL</h4>
                <h4 className="font-semibold">£{FormatPrice(subTotal)}</h4>
              </div>
              <div>
                <Link to={"/checkout"}>
                
                <button className="w-full text-center text-gray-900 bg-green-600 rounded-md text-sm h-12 my-4 sm:text-lg">
                  CHECKOUT
                </button>
                </Link>

                <Link to={"/"}>
                  <p className="text-center text-xs text-gray-900 underline sm:text-sm hover:text-gray-500 transition hover:ease-in-out">
                    Continue Shopping
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Cart;
