function SideBar() {
  return (
    <>
      <section className="h-lvh border-r border-slate-300 w-10/12 lg:block lg:w-2/12 lg:border-none">
        <div className=" ml-10 pt-16 lg:ml-4">
          <img
            className="w-52 border-b pb-3 border-slate-600"
            src="leshop.png"
            alt=""
          />
          <div className="flex justify-between mt-3 border-b w-52 pb-3 border-slate-600  ">
            <h2 className="border-r border-slate-600 pr-8">
              Cart <span className="pl-1 text-red-600 ">0</span>
            </h2>
            <h2 className="">$25.00 USD</h2>
          </div>
        </div>
        <form className="text mt-4  ml-10 lg:ml-4">
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
      </section>
    </>
  );
}

export default SideBar;
