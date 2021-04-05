export const priceFormatter = (price) => {
  /**
   * Returns free if price is equal to 0 or not exist
   * Returns int if price is whole price
   */
  if (parseInt(price) == 0 || !price) {
    return "FREE";
  }
  if (price % 1 != 0) {
    return "£" + parseFloat(price).toFixed(2);
  }
  return "£" + parseInt(price);
};
