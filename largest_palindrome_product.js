/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

    var min = Math.pow(10, digits - 1);
    var max = Math.pow(10, digits);

    for(var num = max*max; num > min*min; num--){
        if(isPalindrome(num)) {
            var factors = digitFactors(num, digits);
            if(factors.length === 2) {
                factor_0 = factors[0];
                factor_1 = factors[1];
                palindromeNumber = num;
                break;
            }
        }
    }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};

function isPalindrome(num) {
    var n = num;
    var rev = 0;

    while(n > 0) {
        rev = rev * 10 + n % 10;
        n =Math.floor(n / 10)
    }

    if(num === rev) {
        return true;
    }
    return false;
}

function digitFactors(num, digits) {
    var min = Math.sqrt(num);
    var max = Math.pow(10, digits) - 1;
    var factors = []

    for(var i = max; i >= min; i--) {
        if(num / i > max) {
            break;
        }

        if(num % i === 0) {
            factors[0] = num/i;
            factors[1] = i;
        }
    }
    return factors;
}