import { useCart } from "../../context/CartContext";

type CartProductCardProps = {
  id: number;
  quantity: number;
};

function CartProductCard({ id, quantity }: CartProductCardProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity, cartItems } = useCart(); 

 console.log(cartItems);
 

  return (
    <section className="flex items-center justify-between my-4 border-b py-4">
      <div className="flex items-center">
        <img src={`${id}.jpg`} alt="Product" className="w-20 h-20 object-cover" />
        <h3 className="pl-4">{`Product ${id}`}</h3>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={decreaseCartQuantity}
          className="bg-gray-300 rounded-md px-2 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in"
        >
          -
        </button>
        <h3>{quantity}</h3>
        <button
          onClick={increaseCartQuantity}
          className="bg-gray-300 rounded-md px-2 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in"
        >
          +
        </button>
      </div>
    </section>
  );
}

export default CartProductCard;
