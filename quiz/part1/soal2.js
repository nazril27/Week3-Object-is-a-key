//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    let arr = [];
    let siapaYangGede;
    if(angka1 > angka2){
      siapaYangGede = angka1;
    } else {
      siapaYangGede = angka2;
    }
    for(let i = 1; i <= siapaYangGede; i++){
      if(angka1 % i === 0 && angka2 % i === 0){
        arr.push(i);
      }
    }
    return arr[arr.length - 1];
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1