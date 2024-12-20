import FormatPrice from "../../Utilities/FormatPrice";

function ProductCard({ product }) {
  return (
    <>
      <div className="border-white bg-white px-2 py-2 rounded-md shadow-md">
        <div className="h-48 border-white rounded-md mb-2 lg:mb-6">
          <img
            className="w-24 mx-auto mt-4 lg:w-32 "
            src={product.image}
            alt=""
          />
        </div>
        <div>
            <h3 className="text-xs mb-4 px-4">{product.title}</h3>
        </div>
        <div className="text-center px-4 pb-2 lg:flex lg:justify-between lg:items-center ">
          <h3 className="mb-2">${FormatPrice(product.price)}</h3>
          <button className="bg-gray-300 px-2 py-0.5 rounded-md border-gray-300 border-2 hover:bg-white">Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
