/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function value(roman) 
{
    if (roman == 'I')
        return 1;
    if (roman == 'V')
        return 5;
    if (roman == 'X')
        return 10;
    if (roman == 'L')
        return 50;
    if (roman == 'C')
        return 100;
    if (roman == 'D')
        return 500;
    if (roman == 'M')
        return 1000;
    return -1;
}
function romanToDecimal(roman) 
{
  
    var result = 0;
  
     for (i = 0; i < roman.length; i++) 
     {
         var s1 = value(roman.charAt(i));
         
         if (i + 1 < roman.length) 
         {
             var s2 = value(roman.charAt(i + 1));
  
             // Comparing both values
             if (s1 >= s2) 
             {
                 result = result + s1;
             } 
             else 
             {
              result = result + s2 - s1;
              i++;
             }
         } 
         else  
         {
          result = result + s1;
         }
     }
     return result;
}

module.exports = romanToDecimal;
