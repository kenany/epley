/**
 * @param {number} w
 * @param {number} r
 * @returns {number}
 */
function epley(w, r) {
  return w * (r / 30 + 1);
}

module.exports = epley;
