import useSelectedQuantity from "components/hooks/useSelectedQuantity";
import { Button } from "neetoui";
import { isNil } from "ramda";
// import useCartItemsStore from "stores/useCartItemsStore";
// import { shallow } from "zustand/shallow";

import ProductQuantity from "./ProductQuantity";

const AddToCart = ({ availableQuantity, slug }) => {
  const { selectedQuantity, setSelectedQuantity } = useSelectedQuantity(slug);

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedQuantity(1);
  };

  if (isNil(selectedQuantity)) {
    return <Button label="Add to cart" size="large" onClick={handleClick} />;
  }

  return <ProductQuantity {...{ slug, availableQuantity }} />;
};

export default AddToCart;
