const cartTotal = (items) => {
  return Array.from(items).reduce((prev, current) => {
    return (prev += current.price);
  }, 0);
};

export default cartTotal;
