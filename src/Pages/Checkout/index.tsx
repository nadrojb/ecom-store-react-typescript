function Checkout() {
  return (
    <>
      <div className="py-4 border-b border-gray-300">
        <h1 className="text-2xl text-center spacing font-medium tracking-tighter">
          LeShop
        </h1>
      </div>
      <section className="w-full mb-20">
        <div className="pt-6">
          <form action="" className="w-10/12 mx-auto">
            <div>
              <h2 className="text-xl font-medium" htmlFor="">
                Contact
              </h2>
              <input
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2 mt-3"
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
              <h2 className="text-xl font-medium" htmlFor="">
                Delivery
              </h2>

              <input
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2 mt-3"
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
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2 "
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
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2 "
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
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2 "
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
                className="w-full border border-gray-300 rounded-sm pt-5 pb-1 px-2 "
                type="text"
              />
              <label
                className="relative -top-12 left-2 text-sm text-gray-500"
                htmlFor=""
              >
                Postcode
              </label>
            </div>
            <div>
            <h2 className="text-xl font-medium" htmlFor="">
                Shipping Method
              </h2>
              <div className="flex justify-between items-center border border-gray-300 px-2">
                <h4>
                    Next Day 
                </h4>
                <h4 className="font-semibold">
                    £4.99
                </h4>
              </div>
            </div>
          </form>
        </div>
        <div className=""></div>
      </section>
    </>
  );
}

export default Checkout;
