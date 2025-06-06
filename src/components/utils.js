import { sum } from "ramda";
import useCartItemsStore from "stores/useCartItemsStore";

export const cartTotalOf = (products, priceKey) => {
  const { cartItems } = useCartItemsStore.getState();
  console.log(cartItems);

  return sum(
    products.map(product => product[priceKey] * cartItems[product.slug])
  );
};
