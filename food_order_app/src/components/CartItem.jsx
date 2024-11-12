import { currencyFormatter } from "../util/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrement,
  onDecrement,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrement}>-</button>
        <button>{quantity}</button>
        <button onClick={onIncrement}>+</button>
      </p>
    </li>
  );
}
