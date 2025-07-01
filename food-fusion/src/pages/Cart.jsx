import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between p-2 border-b">
            <span>{item.name}</span>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default Cart;
