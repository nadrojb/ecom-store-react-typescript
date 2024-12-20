function ProductCard({ product }) {
  return (
    <>
      <div>
        <img src={product.image} alt="" />
        <div className="flex justify-between px-4">
          <h3>{product.price}</h3>
          <h3 className="">add</h3>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
