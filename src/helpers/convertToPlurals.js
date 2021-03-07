export default function convertToPlurals(quantity, unit) {
  return quantity === 1 ? unit : `${unit}s`;
}
