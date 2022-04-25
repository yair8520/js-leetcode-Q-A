/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    let result = 1;
    while (result*result <= x) result++;
    return result - 1;
};