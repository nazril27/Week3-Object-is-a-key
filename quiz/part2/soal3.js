//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    let arr = [];
    let result = '';
    const alfabet = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const hurufBadag = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ-/?.<>,;[]=+-_{}$!@#%^&*()';

    for (let i = 0; i < kalimat.length; i++){
      for (let j = 0; j < alfabet.length; j++){
        if (kalimat[i] === alfabet[j]){
          arr[i] = kalimat[i].toUpperCase();
        } 
      }
    }
   
    for (let k = 0; k < kalimat.length; k++){
      for (let l = 0; l < hurufBadag.length; l++){
        if(kalimat[k] === hurufBadag[l]){
          arr[k] = kalimat[k].toLowerCase();
        }
      }
    }

    for (let m = 0; m < arr.length; m++){
      result += arr[m];
    }
    
    return result;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"