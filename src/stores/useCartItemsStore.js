import { without } from "ramda";
import { create } from "zustand";

const useCartItemsStore = create(set => ({
  cartItems: [],
  toggleIsInCart: slug => {
    set(({ cartItems }) =>
      cartItems.includes(slug)
        ? { cartItems: without([slug], cartItems) }
        : { cartItems: [...cartItems, slug] }
    );
  },
}));

export default useCartItemsStore;
