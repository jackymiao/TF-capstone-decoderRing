// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


//each letter has a number to match, unique value is I/J = 42
// use object store number as key, leter as value
//need more comments
const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const lookup = {
    11:'a',
    21:'b',
    31:'c',
    41:'d',
    51:'e',
    12:'f',
    22:'g',
    32:'h',
    42:'(i/j)',
    52:'k',
    13:'l',
    23:'m',
    33:'n',
    43:'o',
    53:'p',
    14:'q',
    24:'r',
    34:'s',
    44:'t',
    54:'u',
    15:'v',
    25:'w',
    35:'x',
    45:'y',
    55:'z'
  }
//the function takes two parameters,input is a string, encode can be true or false
  function polybius(input, encode = true) {
    // your solution code here
    //if encode is true, then run the code inside if statement.
    if(encode === true){
      //The input string is converted to lowercase and split into an array called inputMsgLowcaseArr. This array will be used to process each character of the input.
      const inputMsgLowcaseArr = input.toLowerCase().split("");
      //The loop iterates over each element in inputMsgLowcaseArr to check if it is either 'i' or 'j'. If found, the element is replaced with '(i/j)'
      for(let i=0;i<inputMsgLowcaseArr.length;i++){
        if(inputMsgLowcaseArr[i]==='i'||inputMsgLowcaseArr[i]==='j'){
          inputMsgLowcaseArr[i] = '(i/j)';
        }
      };
      //This array is created to store the encoded message
      //map function is used to iterate over each element in inputMsgLowcaseArr. It checks if the element exists in lookup and returns the corresponding key. If no match is found, the element itself is added to transferMsg.
    const transferMsg = inputMsgLowcaseArr.map((element)=>{
      for(let i in lookup){
        if(lookup[i] === element){
          return i;
        }
      }
      return element;
    })
    //transferMsg is joined into a string and returned as the encoded message.
    return transferMsg.join("")
//If encode is false, the code executes the decoding logic.
    }else{
      //The input string is split by spaces into an array called inputMsgDecodeArray. This array represents the encoded message.
      const inputMsgDecodeArray = input.split(" ");
      //The code checks if the combined length of inputMsgDecodeArray is odd. If it is odd, it means the input is invalid, and false is returned.
      if(inputMsgDecodeArray.join("").length%2 !== 0){
        return false
      }
      //This array is created to store the decoded message as a series of numbers.
      const transferArray = [];
      //loops iterate over each element in inputMsgDecodeArray. 
      //Each element is split into an array of individual characters. 
      //Then, within this array, the code takes every two characters at a time (num1 and num2) and adds them to transferArray as a combined string.
      for(let subArr of inputMsgDecodeArray){
        subArr = subArr.split("");
        for(let j=0;j<subArr.length;j+=2){
          const num1 = subArr[j];
          const num2 = subArr[j+1];
          transferArray.push(`${num1}${num2}`)
        }
        //After processing each element in inputMsgDecodeArray, the code adds a space character to transferArray to represent the spacing between words.
        transferArray.push(" ")
      }
      //This array is created to store the decoded message.
      //The map function iterates over each element in transferArray. If the element is not equal to a space character, it looks up the corresponding value in the lookup table and adds it to resultArray. If the element is a space character, it is directly added to resultArray.
      const resultArray = transferArray.map((element)=>{
        if(element !== " "){
          return lookup[element]
        }else{
          return element;
        }
      })
      //resultArray is joined into a string, trailing whitespace is removed using trimEnd(), and the decoded message is returned.
      return resultArray.join("").trimEnd();
  }
}

  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };



