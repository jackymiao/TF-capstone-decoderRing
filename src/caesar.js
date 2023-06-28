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
    if(shift===0||shift > 25||shift <-25){return false}
    if(encode === true){
      const msgArray = input.split("");
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
          return letters[num]//letters[num] same way
        }else{
          return element;
        };      
      });
      return numMsgArray.join("")
    }else{
      const msgArray = input.split("");
      const numMsgArray =  msgArray.map((element)=>{
        element = element.toLowerCase();
        if(letters.includes(element)){
          let num = letters.indexOf(element);
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
      return numMsgArray.join("")
    }
   
    // your solution code here
  }

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
