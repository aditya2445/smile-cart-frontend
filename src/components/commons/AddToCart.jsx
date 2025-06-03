// import { useContext } from "react";

import { Button } from "neetoui";
// import { without } from "ramda";
// import CartItemsContext from "src/contexts/CartItemsContext";
import useCartItemsStore from "stores/useCartItemsStore";
import { shallow } from "zustand/shallow";

const AddToCart = ({ slug }) => {
  const { isInCart, toggleIsInCart } = useCartItemsStore(
    store => ({
      isInCart: store.cartItems.includes(slug),
      toggleIsInCart: store.toggleIsInCart,
    }),
    shallow
  );
  // const [cartItems, setCartItems] = useContext(CartItemsContext);

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    toggleIsInCart(slug);
  };

  return (
    <Button
      label={isInCart ? "Remove from cart" : "Add to cart"}
      size="large"
      onClick={handleClick}
    />
  );
};

export default AddToCart;
