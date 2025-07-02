import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">
          🛒 Your cart is empty. Add some tasty meals!
        </p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 p-4 bg-white rounded shadow"
            >
              {/* Image & name */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-medium text-lg">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="text-right mt-6 border-t pt-4">
            <p className="text-lg font-semibold">
              Total Items: {cartItems.length}
            </p>
            <p className="text-xl font-bold text-green-700">
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
