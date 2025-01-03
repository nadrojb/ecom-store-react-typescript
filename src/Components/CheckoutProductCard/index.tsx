import { useCart } from "../../context/CartContext";
import FormatPrice from "../../Utilities/FormatPrice";

type CartProductCardProps = {
  id: number;
  quantity: number;
  title: string;
  price: number;
  image: string;
};

function CheckoutProductCard({ id, quantity }: CartProductCardProps) {
  const { cartItems } = useCart();

  const newProduct = cartItems.find((item) => item.id === id);

  if (!newProduct) {
    return null; 
  }

  const { price, image, title } = newProduct;

  return (
    <section className="flex items-center justify-between border-b py-5 px-4 sm:w-2/3 mx-auto lg:w-full">
      <div className="flex items-center ">
        <img src={image} alt="Product" className="w-20 object-cover" />
        <div className="pl-4 sm:pl-6 w-8/12">
          <h3 className="text-xs mb-1">{title}</h3>
          <p className="text-xs font-medium">
            {quantity} @ £{FormatPrice(price)} each
          </p>
        </div>
      </div>
    </section>
  );
}

export default CheckoutProductCard;
