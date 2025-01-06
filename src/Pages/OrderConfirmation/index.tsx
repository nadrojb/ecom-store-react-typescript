import { Link } from "react-router";

export function OrderConfirmation() {
  return (
    <>
      <div className="py-4 border-b border-gray-300 fixed top-0 z-10 w-full bg-white">
        <h1 className="text-2xl text-center spacing font-medium tracking-tighter">
          LeShop
        </h1>
      </div>
      <div className="w-full mx-auto text-center mt-48">
        <svg
          className="w-8 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
        </svg>
        <h1 className=" mt-6 text-5xl tracking-tighter ">Thank you!</h1>
        <h4 className="mt-3 text-lg">
          A confirmation has been sent to your email.
        </h4>
        <Link to={"/"}>
          <h4 className="mt-2 underline text-xs cursor-pointer hover:text-slate-800">
            Take me back to the homepage.
          </h4>
        </Link>
      </div>
    </>
  );
}
