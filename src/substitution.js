// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standAlph = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ];

  function substitution(input, alphabet='', encode = true) {
    // your solution code here
    //get the array of inputAlphabet
    //for input word, get indexOf standAlph, then use index to inputAlphabet, get the letter
    //to decode, get indexOf subAlphabet, 
    //special letters,don't skip, check subAlphabet.length, not 26, return false,
    //check subAlphabet duplicated letter, true, return false.
    const distinct = (value, index, self) =>{
      return self.indexOf(value) === index
    };
    //check unique letter and length
    const subAlphabet = alphabet.split("");
    if(subAlphabet.length !== subAlphabet.filter(distinct).length||subAlphabet.length !== 26|| alphabet === ''){
      return false;
    };
    //encode
    if(encode === true){
      const inputArr = input.toLowerCase().split("");
      const transferArr = inputArr.map((element)=>{
        if(element !== " "){
          const num = standAlph.indexOf(element);
          return subAlphabet[num];
        }else{
          return " "
        }
      })
      return transferArr.join("");
    }else{
      const inputArr = input.split("");
      const transferArr = inputArr.map((element)=>{
        if(element !== " "){
          const num = subAlphabet.indexOf(element);
          return standAlph[num]
        }else{
          return " "
        }
      })
      return transferArr.join("");
    }






  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
