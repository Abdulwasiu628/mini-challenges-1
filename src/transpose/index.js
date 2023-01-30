/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  var check = [];
  for (var index = 0; index < array.length; ++index) {
      for (var elem = 0; elem < array[index].length; ++elem) {

          if (array[index][elem] === undefined){
            continue; 
          } 

          if (check[elem] === undefined){
            check[elem] = [];

          } 
          check[elem][index] = array[index][elem];


      }
  }
  return check;
}

module.exports = transpose;
