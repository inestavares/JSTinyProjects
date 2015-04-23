// guess a number in a range of numbers

var num = 14335893; // a number that we do not know
var steps = 0;

var binarySearch = function(first, last) {
  var start = first, 
      end = last, 
      pivot = start + (Math.floor((end - start) / 2));  
  if (num > pivot) {
    start = pivot;
    console.log("Higher! " + pivot);
    console.log("[" + start + "," + end + "]");
    return binarySearch(start, end);
  } else if (num < pivot) {
    end = pivot;
    console.log("Lower than!" + pivot);
    console.log("[" + start + "," + end + "]");
    return binarySearch(start, end);
  }
  // return pivot;
}

binarySearch(0, 4000000000);




