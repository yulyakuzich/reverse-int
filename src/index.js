module.exports = function reverse(n) {
  const result = parseFloat(n.toString().split("").reverse().join(""));
  return result
}
