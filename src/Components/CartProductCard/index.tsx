import { useCart } from "../../context/CartContext";

function CartProductCard({cartItem}){
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    cartItems,
  } = useCart();
  const quantity = getItemQuantity(cartItem.id);
  return (
    <>
      <section>
        <div>
          <img src={cartItem.image} alt="" />
          <h3 className="">{cartItem.title}</h3>
          <div className="flex justify-center">
            <button
              onClick={() => decreaseCartQuantity(cartItem.id)}
              className="bg-gray-300 rounded-md px-2 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in"
            >
              -
            </button>
            <h3 className="pl-2 pr-2">{quantity}</h3>
            <button
              onClick={() => increaseCartQuantity(cartItem.id)}
              className="bg-gray-300 rounded-md px-2 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in"
            >
              +
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartProductCard;
