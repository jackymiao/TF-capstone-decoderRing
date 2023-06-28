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
//input (a string), alphabet (a string with a default value of an empty string), and encode (a boolean with a default value of true). It performs encoding or decoding operations using the substitution cipher algorithm and a given substitution alphabet.
  function substitution(input, alphabet='', encode = true) {
    //The code defines a helper function called distinct. This function is used to filter out duplicate values from an array. It returns true for the first occurrence of each distinct value in the array and false for subsequent occurrences.
    const distinct = (value, index, self) =>{
      return self.indexOf(value) === index
    };
    const subAlphabet = alphabet.split("");
    //The code checks if the provided alphabet meets the requirements for a valid substitution alphabet:
    //The length of subAlphabet is not equal to the length of subAlphabet filtered with the distinct function. This ensures that all elements in subAlphabet are distinct.
    //The length of subAlphabet is equal to 26, indicating that it contains all 26 letters of the English alphabet.
    //The alphabet string is not empty ('').
    //If any of these conditions is not met, the function returns false to indicate an invalid substitution alphabet.
    if(subAlphabet.length !== subAlphabet.filter(distinct).length||subAlphabet.length !== 26|| alphabet === ''){
      return false;
    };
    // If encode is true, the function performs encoding.
    if(encode === true){
      //The input string is converted to lowercase and split into an array called inputArr, where each element represents a single character.
      const inputArr = input.toLowerCase().split("");
      // This array is created to store the encoded message.
      // The map function is used to iterate over each element in inputArr. 
      //If the element is not a space, its index in the standAlph array is obtained using indexOf. The corresponding letter from the subAlphabet array is added to transferArr. 
      //If the element is a space, it is added as is to transferArr.
      const transferArr = inputArr.map((element)=>{
        if(element !== " "){
          const num = standAlph.indexOf(element);
          return subAlphabet[num];
        }else{
          return " "
        }
      })
      // transferArr is joined into a string and returned as the encoded message.
      return transferArr.join("");
    }else{
      //If encode is false, the function performs decoding.
      const inputArr = input.split("");
      const transferArr = inputArr.map((element)=>{
        if(element !== " "){
          //The code is similar to the encoding logic, but in this case, the index of the element in the subAlphabet array
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
