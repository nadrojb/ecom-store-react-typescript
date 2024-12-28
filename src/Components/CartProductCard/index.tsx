import { useCart } from "../../context/CartContext";

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

  const newProduct = cartItems.find((item) => item.id === id)

  const {price, image, title} = newProduct;

  console.log(newProduct);
  

  return (
    <section className="flex items-center justify-between my-4 border-b py-4">
      <div className="flex items-center">
        <img
          src={image}
          alt="Product"
          className="w-20 h-20 object-cover"
        />
        <div className="pl-4">
        <h3>{title}</h3>
        <p>{quantity} @ ${price} each</p>
        </div>
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
          onClick={() => increaseCartQuantity(id)}
          className="bg-gray-300 rounded-md px-2 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in"
        >
          +
        </button>
      </div>
    </section>
  );
}

export default CartProductCard;
