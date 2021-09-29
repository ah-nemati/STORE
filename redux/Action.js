export const Action = {
  PRODUCTS: "PRODUCTS",
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
};

export const decrease = (cart, id) => {
  const newDate = [...cart];
  newDate.forEach((ite) => {
    if (ite._id === id) ite.qountity -= 1;
  });
  return { type: "ADD_CART", payload: newDate };
};

export const increase = (cart, id) => {
  const newDate = [...cart];
  newDate.forEach((ite) => {
    if (ite._id === id) ite.qountity += 1;
  });
  return { type: "ADD_CART", payload: newDate };
};

export const removeCart = (data, id) => {
  const newDate = data.filter((item) => item._id !== id);
  return { type: "ADD_CART", payload: newDate };
};
