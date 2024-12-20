function ProductCard({ product }) {
  return (
    <>
      <div className="border-white bg-white px-2 py-2 rounded-md shadow-md">
        <div className="h-48 border-white rounded-md mb-2 lg:mb-6">
          <img className="w-24 mx-auto mt-4 lg:w-32 " src={product.image} alt="" />
        </div>
        <div className="flex justify-between px-4 pb-2">
          <h3>{product.price}</h3>
          <button className="cursor-pointer">add</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
