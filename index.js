/**
 * 
 * @param {number} num 
 * @returns {number}
 */

const factorial = (num) => {
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact = fact * i; 
    }
    return fact;
}

/**
 * 
 * @param {number} n 
 * @param {number} r 
 * @returns 
 */

const nCr = (n, r) => {
    if (r <= n == false) {
        throw console.error("r must be less than or equal to n");
    } else if (r < 0 || n < 0) {
        throw console.error("r and n must be positive numbers");
    }

    const ncr = factorial(n) / ((factorial(r) * factorial(n-r)));
    return ncr;
}

/**
 * 
 * @param {number} n 
 * @param {number} r 
 * @returns 
 */

const nPr = (n, r) => {
    if (r <= n == false) {
        throw console.error("r must be less than or equal to n");
    } else if (r < 0 || n < 0) {
        throw console.error("r and n must be positive numbers");
    }

    const npr = factorial(n) / factorial(n-r);
    return npr;
}

module.exports.nPr = nPr;
module.exports.nCr = nCr;