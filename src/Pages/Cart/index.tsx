import { Link } from "react-router-dom";
import CartProductCard from "../../Components/CartProductCard";
import { useCart } from "../../context/CartContext";
import FormatPrice from "../../Utilities/FormatPrice";
import { useState } from "react";

function Cart() {
  const { cartItems, subTotal, cartQuantity } = useCart();

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
      {cartQuantity === 0 ? (
        <>
      <span className="absolute top-3 left-16 flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
          <div className="mx-auto text-center mt-20">
            <h2 className="text-3xl">Your Cart is Empty.</h2>
          </div>
        </>
      ) : (
        <>
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
          <div className="bg-gray-200 rounded-tl-sm rounded-tr-sm px-4 py-4 fixed bottom-0 w-full sm:px-10 md:px-10 lg:px-10">
            <div className="flex justify-between text-sm sm:text-lg">
              <h4 className="text-gray-600">SUBTOTAL</h4>
              <h4 className="font-semibold">£{FormatPrice(subTotal)}</h4>
            </div>
            <div>
              <button className="w-full text-center bg-green-600 rounded-sm text-sm h-10 my-4 sm:text-lg border-2 border-green-600 hover:bg-gray-200 transition hover:ease-in-out hover:text-green-600">
                CHECKOUT
              </button>
              <Link to={"/"}>
                <p className="text-center text-xs text-gray-600 underline sm:text-sm hover:no-underline transition hover:ease-in-out">
                  Continue Shopping
                </p>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
