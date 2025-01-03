import { useCart } from "../../context/CartContext";
import FormatPrice from "../../Utilities/FormatPrice";

type CartProductCardProps = {
  id: number;
  quantity: number;
  title: string;
  price: number;
  image: string;
};

function CartProductCard({ id, quantity }: CartProductCardProps) {
  const {
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    cartItems,
  } = useCart();

  const newProduct = cartItems.find((item) => item.id === id);

  if (!newProduct) {
    return null;
  } 
  
  const { price, image, title } = newProduct;

  return (
    <section className="flex items-center justify-between border-b py-5 px-4 sm:w-2/3 mx-auto lg:w-full">
      <div className="flex items-center">
        <img src={image} alt="Product" className="w-20 object-cover" />
        <div className="pl-4 sm:pl-6 w-8/12">
          <h3 className="text-xs mb-1">{title}</h3>
          <p className="text-xs font-medium">
            {quantity} @ £{FormatPrice(price)} each
          </p>
        </div>
      </div>
      <div className="sm:flex">

      <div className="flex space-x-2">
        <button
          onClick={
            quantity === 1
            ? () => removeFromCart(id)
            : () => decreaseCartQuantity(id)
          }
          className="bg-slate-900 rounded-md w-6 h-6 text-md text-white "
          >
          -
        </button>
        <h3>{quantity}</h3>
        <button
          onClick={() => increaseCartQuantity(id)}
          className="bg-slate-900 rounded-md w-6 h-6 text-md  text-white "
          >
          +
        </button>
        </div>
        
        <svg
          onClick={() => removeFromCart(id)}
          className="w-4 mx-auto mt-4 sm:mt-0 sm:ml-2 cursor-pointer hover:scale-125 transition hover:ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          >
          <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
          </div>
    </section>
  );
}

export default CartProductCard;
