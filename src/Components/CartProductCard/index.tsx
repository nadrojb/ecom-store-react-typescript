import { Product } from "../../Pages/Home"

function CartProductCard ({product}: Product) {
    return (
        <>
        <section>
        <div>
            <img src={product.image} alt="" />
            <h3 className="">0</h3>
            <div className="flex justify-center">
              <button className="bg-gray-300 rounded-md px-2 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in">
                -
              </button>
              <h3 className="pl-2 pr-2">0</h3>
              <button className="bg-gray-300 rounded-md px-2 text-md border-gray-300 border-2 hover:bg-white transition duration-100 hover:ease-in">
                +
              </button>
            </div>
            
        </div>
        </section>
         
        </>
    )
}

export default CartProductCard