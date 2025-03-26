//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let index = [];
    let result = '';
    let alfabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < kata.length; i++){
      for (let j = 0; j < alfabet.length; j++){
        if(kata[i] === alfabet[j]){
          index.push(j + 1);
        }
      }
    }
    for (let k = 0; k < index.length; k++){
      result += alfabet[index[k]];
    }
    return result;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu