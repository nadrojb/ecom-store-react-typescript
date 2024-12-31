import CartProductCard from "../../Components/CartProductCard";
import { useCart } from "../../context/CartContext";
import FormatPrice from "../../Utilities/FormatPrice";

function Checkout() {
  const { cartItems, subTotal, cartQuantity } = useCart();


  return (
    <>
      <div className="py-4 border-b border-gray-300">
        <h1 className="text-2xl text-center spacing font-medium tracking-tighter">
          LeShop
        </h1>
      </div>
      <section className="w-full">
        <div className="pt-6">
          <form action="" className="w-10/12 mx-auto">
            <div>
              <h2 className="text-xl font-medium">
                Contact
              </h2>
              <input
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2 mt-3 rounded:md"
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
              <h2 className="text-xl font-medium">
                Delivery
              </h2>

              <input
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2 mt-3 rounded:md"
                type="text"
              />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                htmlFor=""
              >
                First name
              </label>
            </div>
            <div>
              <input
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2 rounded:md "
                type="text"
              />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                htmlFor=""
              >
                Last name
              </label>
            </div>
            <div>
              <input
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2 rounded:md "
                type="text"
              />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                htmlFor=""
              >
                Address
              </label>
            </div>
            <div>
              <input
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2  rounded:md"
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
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2 rounded:md "
                type="text"
              />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                htmlFor=""
              >
                Postcode
              </label>
            </div>
          </form>
          <div className="w-10/12 mx-auto">
            <h2 className="text-xl font-medium " htmlFor="">
              Shipping Method
            </h2>
            <button className="flex justify-between items-center border border-gray-300 px-2 py-3 mt-3 cursor-pointer  w-full rounded:md">
              <h4 className="text-sm">Next Day</h4>
              <h4 className="font-semibold">£4.99</h4>
            </button>
            <button className="flex justify-between items-center border border-gray-300 px-2 py-3 mt-3 cursor-pointer w-full rounded:md">
              <h4 className="text-sm">2-3 days</h4>
              <h4 className="font-semibold">£2.49</h4>
            </button>
            <button className="flex justify-between items-center border border-gray-300 px-2 py-3 mt-3 cursor-pointer w-full rounded-md">
              <h4 className="text-sm">5-7 days</h4>
              <h4 className="font-semibold">£1.99</h4>
            </button>
          </div>
          <div>
            <div className="mt-5 bg-gray-100 w-11/12 mx-auto rounded-md">
              <div className="w-11/12 mx-auto py-5">
                <h2 className="text-xl font-medium mb-3" htmlFor="">
                  Payment
                </h2>
                <label className="hidden" htmlFor="">
                  Card number
                </label>
                <input
                  placeholder="Card number"
                  type="text"
                  className="w-full py-3 border border-gray-300 rounded:md px-2"
                />
                <div>
                  <label className="hidden" htmlFor="">
                    Expiration date
                  </label>
                  <input
                    placeholder="Expiration date (MM / YY)"
                    type="text"
                    className="w-full py-3 mt-3 border border-gray-300 rounded:md px-2"
                  />
                  <label className="hidden" htmlFor="">
                    Security Code
                  </label>
                  <input
                    placeholder="Security code"
                    type="number"
                    className="w-full py-3 mt-3 border border-gray-300 rounded:md px-2"
                  />
                </div>
                <label className="hidden" htmlFor="">
                  Name on card
                </label>
                <input
                  placeholder="Name on card"
                  type="text"
                  className="w-full py-3 mt-3 border border-gray-300 rounded:md px-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-20 w-10/12 mx-auto">
        <h2 className="text-xl font-medium">Order Summary</h2>
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


      </section>
    </>
  );
}

export default Checkout;
