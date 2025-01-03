import CheckoutProductCard from "../../Components/CheckoutProductCard";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import FormatPrice from "../../Utilities/FormatPrice";

function Checkout() {
  const { cartItems, subTotal } = useCart();
  const [shippingPrice, setShippingPrice] = useState(0);
  const [shippingOption, setShippingOption] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");


  const totalPrice = subTotal + shippingPrice;

  const handleShippingOption = (price: number, option: string): void => {
    setShippingOption(option);
    setShippingPrice(price);
  };

  function handleEmailChange(e: { target: { value: any } }) {
    const value = e.target.value;
    validateEmail(value);
  }


  function validateEmail(email: string) {
    if (
      email && 
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setInvalidEmail("border-red-500 bg-red-50");
    } else {
      setInvalidEmail("");
    }
  }

  return (
    <>
      <div className="py-4 border-b border-gray-300 fixed top-0 z-10 w-full bg-white">
        <h1 className="text-2xl text-center spacing font-medium tracking-tighter">
          LeShop
        </h1>
      </div>
      <section className="w-full lg:flex">
        <div className="pt-24 lg:pt-24 lg:w-7/12">
          <form action="" className="w-10/12 mx-auto">
            <div>
              <h2 className="text-xl font-medium">Contact</h2>
              <input
                onChange={handleEmailChange}
                required
                className={`w-full border border-gray-300  pt-5 pb-1 px-2 mt-3 rounded-sm ${invalidEmail}`}
                type="text"
              />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                htmlFor=""
              >
                Email
              </label>
            </div>
            <div>
              <h2 className="text-xl font-medium">Delivery</h2>

              <input required
                className="w-full border border-gray-300  pt-5 pb-1 px-2 mt-3 rounded-sm"
                type="text"
              />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                htmlFor=""
              >
                First name *
              </label>
            </div>
            <div>
              <input required
                className="w-full border border-gray-300  pt-5 pb-1 px-2 rounded-sm "
                type="text"
              />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                htmlFor=""
              >
                Last name *
              </label>
            </div>
            <div>
              <input required
                className="w-full border border-gray-300  pt-5 pb-1 px-2 rounded-sm "
                type="text"
              />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                htmlFor=""
              >
                Address *
              </label>
            </div>
            <div>
              <input required
                className="w-full border border-gray-300  pt-5 pb-1 px-2  rounded-sm"
                type="text"
              />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                htmlFor=""
              >
                City
              </label>
            </div>
            <div>
              <input required
                className="w-full border border-gray-300  pt-5 pb-1 px-2 rounded-sm "
                type="text"
              />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                htmlFor=""
              >
                Postcode *
              </label>
            </div>
          </form>
          <div className="w-10/12 mx-auto">
            <h2 className="text-xl font-medium">Shipping Method</h2>
            <button
              onClick={() => handleShippingOption(4.99, "option1")}
              className={`flex justify-between items-center border px-2 py-3 mt-3 cursor-pointer w-full rounded-sm ${
                shippingOption === "option1"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300"
              }`}
            >
              <h4 className="text-sm">Next Day</h4>
              <h4 className="font-semibold">£4.99</h4>
            </button>
            <button
              onClick={() => handleShippingOption(2.49, "option2")}
              className={`flex justify-between items-center border px-2 py-3 mt-3 cursor-pointer w-full rounded-sm ${
                shippingOption === "option2"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300"
              }`}
            >
              <h4 className="text-sm">2-3 days</h4>
              <h4 className="font-semibold">£2.49</h4>
            </button>
            <button
              onClick={() => handleShippingOption(1.99, "option3")}
              className={`flex justify-between items-center border px-2 py-3 mt-3 cursor-pointer w-full rounded-sm ${
                shippingOption === "option3"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300"
              }`}
            >
              <h4 className="text-sm">5-7 days</h4>
              <h4 className="font-semibold">£1.99</h4>
            </button>
          </div>
          <div>
            <div className="mt-5 bg-gray-100 w-11/12 mx-auto rounded-sm">
              <div className="w-11/12 mx-auto py-5">
                <h2 className="text-xl font-medium mb-3">Payment</h2>
                <label className="hidden">Card number</label>
                <input
                  placeholder="Card number"
                  type="text"
                  className="w-full py-3 border border-gray-300 rounded-sm px-2"
                />
                <div>
                  <label className="hidden" htmlFor="">
                    Expiration date
                  </label>
                  <input
                    placeholder="Expiration date (MM / YY)"
                    type="text"
                    className="w-full py-3 mt-3 border border-gray-300 rounded-sm px-2"
                  />
                  <label className="hidden" htmlFor="">
                    Security Code
                  </label>
                  <input
                    placeholder="Security code"
                    type="number"
                    className="w-full py-3 mt-3 border border-gray-300 rounded-sm px-2"
                  />
                </div>
                <label className="hidden" htmlFor="">
                  Name on card
                </label>
                <input
                  placeholder="Name on card"
                  type="text"
                  className="w-full py-3 mt-3 border border-gray-300 rounded-sm px-2"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="mb-20 w-10/12 mx-auto lg:w-5/12 lg:bg-gray-50 lg:h-screen lg:px-10 lg:border-l lg:fixed right-0 top-0 overflow-scroll">
          <h2 className="text-xl font-medium lg:pt-24">Order Summary</h2>
          <div className="lg:w-9/12">
            {cartItems.map((item) => (
              <CheckoutProductCard
                key={item.id}
                id={item.id}
                quantity={item.quantity}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <h4>Subtotal</h4>
            <h4 className="font-semibold">£{FormatPrice(subTotal)}</h4>
          </div>
          <div className="flex justify-between mt-3">
            <h4>Shipping</h4>
            <h4 className="font-semibold">£{shippingPrice}</h4>
          </div>
          <div className="flex justify-between mt-3">
            <h2 className="text-xl font-medium">Total</h2>
            <h2 className="text-xl font-medium">£{FormatPrice(totalPrice)}</h2>
          </div>
          <div>
            <input
              type="submit"
              value={"Pay Now"}
              className="w-full text-center text-gray-900 text-xl bg-green-600 rounded-sm h-12 my-4 "
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default Checkout;
