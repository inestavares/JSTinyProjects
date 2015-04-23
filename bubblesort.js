// Classic Algorithms 1.2 - Bubble Sort 
// a bubble sort works by looping through an array of integers, swapping each pair if 
// they are not in order. 
// Each iteration of the sorting loop uses array.length - 1 as the largest number of the 
// list is always swapped into its final position. This length is set before recursively
// calling the function.
// The bubble Sort algorithm is ineficient - use quicksort instead.



var bubbleSort = function(list) {
  var cur, swapped = false, size = list.length;
  for(var i = 0; i < size; i++) {
    if(list[i] > list[i+1]) {
      swapped = true;
      cur = list[i+1];
      list[i+1] = list[i];
      list[i] = cur;
    }
  }
  if(swapped) {
    size--;
    bubbleSort(list);
  }
  return list;
}

bubbleSort([3,1,2,6,4, 45, 17, 20, 11, 15, -18, -5]);