function ProductCard({ product }) {
  return (
    <>
      <div className="border-white bg-white px-2 py-2 rounded-md shadow-md">
        <div className="h-48 border-whiterounded-md mb-2">
          <img className="w-24 mx-auto mt-4" src={product.image} alt="" />
        </div>
        <div className="flex justify-between px-4">
          <h3>{product.price}</h3>
          <button>add</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
