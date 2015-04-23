/* The quicksort is the fastest sorting algorithm. It uses a pivot - which 
 * must be well chosen - can be the middle of the array, for instance, and       
 * subsequently generates smaller and smaller arrays until all the elements   
 * are in the order, by adding them to left or right of the pivot. 
 * The logic is similar to what we can find in a 
 * mergesort, except it always 
 * has the pivot in the correct position and does not sort individually. 
*/
var quicksort = function(array) {
  if(array.length < 2) {
    return array;
  } else {
    var pivot = [array[Math.floor(array.length / 2)]];
    var smaller = [];
    var bigger = [];
    for(var i = 0; i < array.length; i++) {
      if(array[i] < pivot) {
        smaller.push(array[i]);
      } else if(array[i] > pivot) {
        bigger.push(array[i]);
      }
    }
    return quicksort(smaller).concat(pivot, quicksort(bigger));
  }
}

quicksort([8, 42, 7, 4, 6, 73, 15, 2, 55, 20]);


