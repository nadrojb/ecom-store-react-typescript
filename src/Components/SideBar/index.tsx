function SideBar() {
  return (
    <>
      <section className="border-r-2 border-slate-300 h-lvh w-10/12 flex justify-center">
        <div className="text-center mt-16">
          <img
            className="w-52 border-b-2 pb-4 border-slate-600"
            src="funstore.png"
            alt=""
          />
          <div className="flex justify-between mt-5 border-b-2 w-52 pb-5 border-slate-600 text-lg font-medium">
            <h2 className="border-r-2 border-slate-600 pr-8">
              Cart <span className="pl-1 text-red-600 font-semibold text-xl">0</span>
            </h2>
            <h2 className="">$25.00 USD</h2>
          </div>
          <form>
            <label htmlFor=""></label>
            <input type="text" name="" id="" />
          </form>
        </div>
      </section>
    </>
  );
}

export default SideBar;
