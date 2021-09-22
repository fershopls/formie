export default function (name, label, type = "text", options = {}) {
  return {
    name,
    label,
    type,

    ...options,
  };
}
