import CheckoutProductCard from "../../Components/CheckoutProductCard";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import FormatPrice from "../../Utilities/FormatPrice";
import { useNavigate } from "react-router";

function Checkout() {
  const { cartItems, subTotal } = useCart();
  const [shippingPrice, setShippingPrice] = useState(4.99);
  const [shippingOption, setShippingOption] = useState("option1");
  const [email, setEmail] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [emailStatus, setEmailStatus] = useState(false);
  const [cardExpiryStatus, setCardExpiryStatus] = useState(false);
  const [cardNumberStatus, setCardNumberStatus] = useState(false);
  const [securityCodeStatus, setSecurityCodeStatus] = useState(false);

const navigate = useNavigate();

  const totalPrice = subTotal + shippingPrice;

  const handleShippingOption = (price: number, option: string): void => {
    setShippingOption(option);
    setShippingPrice(price);
  };

  function handleEmailChange(e: { target: { value: any } }) {
    const value = e.target.value;
    validateEmail(value);
  }

  function handleCardNumberChange(e: { target: { value: any; }; }) {
    const value = e.target.value;
    validateCardNumber(value);
  }

  function handleExpiryChange(e: { target: { value: any; }; }) {
    const value = e.target.value;
    validateExpiryDate(value);
  }

  function handleSecurityCodeChange(e) {
    const value = e.target.value;
    validateSecurityCode(value);
  }

  function validateSecurityCode(code: string) {
    if (code && !code.match(/^\d{3}$/)) {
      setSecurityCode("error");
      setSecurityCodeStatus(false);
    } else {
      setSecurityCode("");
      setSecurityCodeStatus(true);
    }
  }

  function validateExpiryDate(expiry: string) {
    if (expiry && !expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      setCardExpiry("error");
      setCardExpiryStatus(false);
    } else {
      setCardExpiry("");
      setCardExpiryStatus(true);
    }
  }

  function validateEmail(email: string) {
    if (
      email &&
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmail("border-red-500 bg-red-50");
      setEmailStatus(false);
    } else {
      setEmail("border-green-500 bg-green-50");
      setEmailStatus(true);
    }
  }

  function validateCardNumber(cardNumber: string) {
    if (cardNumber && !cardNumber.match(/^\d{4}(\s?\d{4}){3}$/)) {
      setCardNumber("error");
      setCardNumberStatus(false);
    } else {
      setCardNumber("");
      setCardNumberStatus(true);
    }
    return;
  }

  function handlePaymentSubmit(e) {
    e.preventDefault();
    if (
      cardNumberStatus &&
      securityCodeStatus &&
      emailStatus &&
      cardExpiryStatus
    ) {
      console.log('success');
      navigate("/checkout/order-confirmation");
    } else {
      console.log("error");
    }
  }

  return (
    <>
      <div className="py-4 border-b border-gray-300 fixed top-0 z-10 w-full bg-white">
        <h1 className="text-2xl text-center spacing font-medium tracking-tighter">
          LeShop
        </h1>
      </div>
      <section className="w-full lg:flex max-w-screen-2xl mx-auto">
        <div className="pt-24 lg:pt-24 lg:w-7/12">
          <form onSubmit={handlePaymentSubmit} className="w-10/12 mx-auto">
            <div>
              <h2 className="text-xl font-medium">Contact</h2>
              <input
                onChange={handleEmailChange}
                required
                className={`w-full border border-gray-300  pt-5 pb-1 px-2 mt-3 rounded-sm ${email}`}
                type="text"
                />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                >
                Email
              </label>
            </div>
            <div>
              <h2 className="text-xl font-medium">Delivery</h2>

              <input
                required
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
              <input
                required
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
              <input
                required
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
              <input
                required
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
              <input
                required
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
            <div className="mx-auto">
              <h2 className="text-xl font-medium">Shipping Method</h2>
              <label
                className={`${
                  shippingOption === "option1"
                    ? "flex justify-between items-center border px-2 py-3 mt-3 cursor-pointer w-full rounded-sm bg-green-50 border-green-500"
                    : "flex justify-between items-center border px-2 py-3 mt-3 cursor-pointer w-full rounded-sm"
                }`}
              >
                <input
                  type="radio"
                  id="option1"
                  name="delivery-option"
                  checked={shippingOption === "option1"}
                  onChange={() => handleShippingOption(4.99, "option1")}
                  className="mr-2"
                />
                <div className="flex">
                  <h4 className="text-sm">Next Day</h4>
                </div>
                <h4 className="font-semibold">£4.99</h4>
              </label>
              <label
                className={`${
                  shippingOption === "option2"
                    ? "flex justify-between items-center border px-2 py-3 mt-3 cursor-pointer w-full rounded-sm bg-green-50 border-green-500"
                    : "flex justify-between items-center border px-2 py-3 mt-3 cursor-pointer w-full rounded-sm"
                }`}
              >
                <input
                  type="radio"
                  id="option2"
                  name="delivery-option"
                  checked={shippingOption === "option2"}
                  onChange={() => handleShippingOption(2.49, "option2")}
                  className="mr-2"
                />
                <div className="flex">
                  <h4 className="text-sm">2-3 days</h4>
                </div>
                <h4 className="font-semibold">£2.49</h4>
              </label>
              <label
                className={`${
                  shippingOption === "option3"
                    ? "flex justify-between items-center border px-2 py-3 mt-3 cursor-pointer w-full rounded-sm bg-green-50 border-green-500"
                    : "flex justify-between items-center border px-2 py-3 mt-3 cursor-pointer w-full rounded-sm"
                }`}
              >
                <input
                  type="radio"
                  id="option3"
                  name="delivery-option"
                  checked={shippingOption === "option3"}
                  onChange={() => handleShippingOption(1.99, "option3")}
                  className="mr-2"
                />
                <div className="flex">
                  <h4 className="text-sm">5-7 days</h4>
                </div>
                <h4 className="font-semibold">£1.99</h4>
              </label>
            </div>
            <div>
              <div className="mt-5 bg-gray-100 mx-auto rounded-sm">
                <div className="w-11/12 mx-auto py-5">
                  <h2 className="text-xl font-medium mb-3">Payment</h2>
                  <label className="hidden">Card number</label>
                  <input
                    onChange={handleCardNumberChange}
                    required
                    placeholder="Card number"
                    type="text"
                    className={` ${
                      cardNumber === "error"
                        ? "w-full py-3 border border-red-500 bg-red-50 rounded-sm px-2"
                        : "w-full py-3 border border-gray-300 rounded-sm px-2 "
                    }`}
                  />
                  <div>
                    <label className="hidden" htmlFor="">
                      Expiration date
                    </label>
                    <input
                      onChange={handleExpiryChange}
                      required
                      placeholder="Expiration date (MM / YY)"
                      type="text"
                      className={` ${
                        cardExpiry === "error"
                          ? "w-full py-3 border mt-3 border-red-500 bg-red-50 rounded-sm px-2"
                          : "w-full py-3 border mt-3 border-gray-300 rounded-sm px-2 "
                      }`}
                    />
                    <label className="hidden" htmlFor="">
                      Security Code
                    </label>
                    <input
                      onChange={handleSecurityCodeChange}
                      required
                      placeholder="Security code"
                      type="number"
                      className={` ${
                        securityCode === "error"
                          ? "w-full py-3 border mt-3 border-red-500 bg-red-50 rounded-sm px-2"
                          : "w-full py-3 border mt-3 border-gray-300 rounded-sm px-2 "
                      }`}
                    />
                  </div>
                  <label className="hidden" htmlFor="">
                    Name on card
                  </label>
                  <input
                    required
                    placeholder="Name on card"
                    type="text"
                    className="w-full py-3 mt-3 border border-gray-300 rounded-sm px-2"
                  />
                </div>
              </div>
            </div>
            <div
              id="mobile-order-summary"
              className="w-11/12 mt-6 mx-auto  lg:hidden sm:block md:block"
            >
              <h2 className="text-xl font-medium lg:pt-24">Order Summary</h2>
              <div>
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
                <h2 className="text-xl font-medium">
                  £{FormatPrice(totalPrice)}
                </h2>
              </div>
            </div>
            <input
              type="submit"
              value={"Pay Now"}
              className="w-full text-center text-gray-900 text-xl bg-green-600 rounded-sm h-12 my-4 cursor-pointer"
            />
          </form>
        </div>
        <section
          id="desktop-order-summary"
          className="mb-20 w-10/12 mx-auto lg:w-5/12 lg:bg-gray-50 lg:h-screen lg:px-10 lg:border-l lg:fixed right-0 top-0 overflow-scroll hidden lg:block max-w-screen-2xl"
        >
          <h2 className="text-xl font-medium lg:pt-24">Order Summary</h2>
          <div className="lg:w-9/12 max-w-screen-2xl">
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
          <div className="flex justify-between mt-3 max-w-screen-sm">
            <h4>Subtotal</h4>
            <h4 className="font-semibold">£{FormatPrice(subTotal)}</h4>
          </div>
          <div className="flex justify-between mt-3 max-w-screen-sm">
            <h4>Shipping</h4>
            <h4 className="font-semibold">£{shippingPrice}</h4>
          </div>
          <div className="flex justify-between mt-3 max-w-screen-sm">
            <h2 className="text-xl font-medium">Total</h2>
            <h2 className="text-xl font-medium">£{FormatPrice(totalPrice)}</h2>
          </div>
        </section>
      </section>
    </>
  );
}

export default Checkout;
