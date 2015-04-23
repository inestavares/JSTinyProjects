/* The selection sort finds the smallest element in the array, removes it
 * and adds it to a new data structure in order. It can use nested loops instead of this solution.
 *
*/

var selectionSort = function(array) {
  var findSmallest = function(someArray) {
     var small = array[0];
    var small_position = 0;
    for(var i = 0; i < someArray.length; i++) {
      if(small > someArray[i]) {
        small = someArray[i];
        small_position = i;
      }    
    }
    return small_position;
  };
  var sort = function(array) {
    var oldArray = array; var newArray = [], size = oldArray.length;
    for(var j = 0; j < size; j++) {
      small_position = findSmallest(oldArray); 
      newArray.push(oldArray[small_position]);
      oldArray.splice(small_position, 1);
      }
      return newArray;
    }
  return sort(array);
}

selectionSort([45, 8, 10, -1000, 7, 25, -20]);


