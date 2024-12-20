import FormatPrice from "../../Utilities/FormatPrice";
import { Product } from "../../Pages/Home";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }: Product) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();
  const quantity = getItemQuantity(product.id);
  return (
    <>
      <div className="border-white bg-white px-2 py-2 rounded-md shadow-md">
        <div className="h-48 border-white rounded-md mb-2 lg:mb-6">
          <img
            className="w-24 mx-auto mt-4 lg:w-32 "
            src={product.image}
            alt={product.title}
          />
        </div>
        <div>
          <h3 className="text-xs mb-4 px-4">{product.title}</h3>
        </div>
        <div className="text-center px-4 pb-2 lg:flex lg:justify-between lg:items-center ">
          <h3 className="mb-2">${FormatPrice(product.price)}</h3>
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(product.id)}
              className="bg-gray-300 px-2 py-0.5 rounded-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in"
            >
              Add to cart
            </button>
          ) : (
            <div className="flex justify-center">
              <button onClick={() => decreaseCartQuantity(product.id)} className="bg-gray-300 rounded-md px-2 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in">
                -
              </button>
              <h3 className="pl-2 pr-2">{quantity}</h3>
              <button onClick={() => increaseCartQuantity(product.id)} className="bg-gray-300 rounded-md px-2 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in">
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
