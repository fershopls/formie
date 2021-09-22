export default function (array, options = {}) {
  return {
    name: array[0],
    label: array[1],
    type: array[2],
    ...options,
  };
}
