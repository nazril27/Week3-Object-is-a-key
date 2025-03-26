function cariMedian(arr) {
    // you can only write your code here!
    const rumusGenap = (arr.length - 1) / 2;
    const rumusGanjil = arr.length - 1;
    const uhuu = (rumusGanjil + 1) / 2;
    // if (arr.length % 2 === 0){
    //   return (arr[rumusGenap] + arr[rumusGenap + 1]) / 2;
    // } else {
    //   return arr[rumusGanjil] / 2;
    // }
    return arr[uhuu];
    
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5