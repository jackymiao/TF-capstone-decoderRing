// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

 
//create a array with letters, reference array.
//change sentence to an array, string.split(""), get an array of single letters
//use indexOf() method to get the index of each letter, use map(), turn elements in array to numbers
// minus or plus by shift depends on encode value.
//translate numbers to letter by reference array
const caesarModule = (function () {
  const letters = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ];
  // you can add any code you want within this function scope

  function caesar(input, shift=0, encode = true) {
    //first check if the shift value is 0, greater than 25, or less than -25. If any of these conditions is true, the function returns false to indicate an invalid shift value.
    if(shift===0||shift > 25||shift <-25){return false}
    // If encode is true, the function performs encoding
    if(encode === true){
      //The input string is split into an array called msgArray, where each element represents a single character.
      const msgArray = input.split("");
      //This array is created to store the encoded message.
      //The map function is used to iterate over each element in msgArray. 
      //Each element is converted to lowercase, and if it exists in the letters array, its index is obtained. 
      //The shift value is added to the index, and the resulting index is adjusted to wrap around within the letters array (if it goes beyond the bounds). The corresponding letter at the adjusted index is added to numMsgArray. 
      //If the element is not found in letters, it is added as is to numMsgArray.
      const numMsgArray =  msgArray.map((element)=>{
        element = element.toLowerCase();
        if(letters.includes(element)){
          let num = letters.indexOf(element);
          num = num + shift;
          if(num > 25){
            num = num - 26;
          } else if(num < 0){
            num = num + 26;
          }
          return letters[num]
        }else{
          return element;
        };      
      });
      //numMsgArray is joined into a string and returned as the encoded message.
      return numMsgArray.join("")
    }else{
      //If encode is false, the function performs decoding.
      const msgArray = input.split("");
      const numMsgArray =  msgArray.map((element)=>{
        element = element.toLowerCase();
        if(letters.includes(element)){
          let num = letters.indexOf(element);
          //The code is similar to the encoding logic, but in this case, the shift value is subtracted from the index to reverse the encoding process.
          num = num - shift;
          if(num > 25){
            num = num - 26;
          } else if(num < 0){
            num = num + 26;
          }
          return letters[num]
        }else{
          return element;
        };      
      });
      //The resulting decoded message is returned as a string.
      return numMsgArray.join("")
    }
   
    // your solution code here
  }

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
