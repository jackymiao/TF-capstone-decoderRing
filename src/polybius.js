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
  // const lookup = [['a','b','c','d','e'],
  //                 ['f','g','h','i/j','k'],
  //                 ['l','m','n','o','p'],
  //                 ['q','r','s','t','u'],
  //                 ['v','w','x','y','z']]
  // transform letter to number, if it is a number
  // function letterToNum(letter){
  //   for(let i=0; i<lookup.length;i++){
  //     for(let j=0;j<lookup[i].length;j++){
  //       if(lookup[i][j] === letter){
  //         return `${i}${j}`
  //       }
  //     }
  //   }
  //   return false;
  // }
  // function numToLetter(num){
  //   const num1 = Number(num[0]);
  //   const num2 = Number(num[1]);
  //   try{
  //     return lookup[num1][num2]
  //   }catch(error){
  //     return false;
  //   }
  // }

  function polybius(input, encode = true) {
    // your solution code here
    if(encode === true){
      //to lowercase and get an array
      const inputMsgLowcaseArr = input.toLowerCase().split("");
      //loop through the array, change i or j to i/j
      for(let i=0;i<inputMsgLowcaseArr.length;i++){
        if(inputMsgLowcaseArr[i]==='i'||inputMsgLowcaseArr[i]==='j'){
          inputMsgLowcaseArr[i] = '(i/j)';
        }
      };
      //change letter to word or don't change if it is space
    const transferMsg = inputMsgLowcaseArr.map((element)=>{
      for(let i in lookup){
        if(lookup[i] === element){
          return i;
        }
      }
      return element;
    })
    return transferMsg.join("")
      // return inputMsgLowcaseArr.reduce((accumulator, element)=>{
      //   for(let i=0; i<lookup.length;i++){
      //     for(let j=0;j<lookup[i].length;j++){
      //       if(lookup[i][j] === element){
      //         return accumulator += `${i}${j}`
      //       }
      //     }
        //}

        //  if(letterToNum(element)){
        //   return accumulator += letterToNum;
        //  } else{
        //   return accumulator += element;
        //  }
      //},'')
    }else{
      //split the input to an array, get rid of space
      const inputMsgDecodeArray = input.split(" ");
      if(inputMsgDecodeArray.join("").length%2 !== 0){
        return false
      }
      const transferArray = [];
      //get an array of strings(numbers)
      //loop through the array to get single word, then split single word to an array, loop through the array, add number to transferArray.
      for(let subArr of inputMsgDecodeArray){
        subArr = subArr.split("");
        for(let j=0;j<subArr.length;j+=2){
          const num1 = subArr[j];
          const num2 = subArr[j+1];
          transferArray.push(`${num1}${num2}`)
        }
        transferArray.push(" ")
      }
      const resultArray = transferArray.map((element)=>{
        if(element !== " "){
          return lookup[element]
        }else{
          return element;
        }
      })
      return resultArray.join("").trimEnd();

    //   const splitedMsg = [];
    //   const spaceIndex = inputMsgLowcaseArr.indexOf(" ");
    //   const nospaceMsg = inputMsgLowcaseArr.splice(spaceIndex,1)
    //   for(let i =0;i<nospaceMsg.lengh;i+=2){
    //     splitedMsg.push(`${nospaceMsg[i]}${nospaceMsg[i+1]}`)
    // }
    // const finishedMsg = splitedMsg.splice(spaceIndex,0," ").join("");
    // return finishedMsg
  }
}

  return {
    polybius,
  };
})();

//const polybius = polybiusModule.polybius
//console.log(polybius("4432423352125413",false))

module.exports = { polybius: polybiusModule.polybius };



/**
 Function Signature: The function polybius takes two parameters: input (a string) and encode (a boolean with a default value of true). The purpose of the function is to perform encoding or decoding based on the value of encode.

Encode: If encode is true, the code executes the encoding logic.

a. inputMsgLowcaseArr: The input string is converted to lowercase and split into an array called inputMsgLowcaseArr. This array will be used to process each character of the input.

b. for loop: The loop iterates over each element in inputMsgLowcaseArr to check if it is either 'i' or 'j'. If found, the element is replaced with '(i/j)'.

c. transferMsg array: This array is created to store the encoded message.

d. map function: The map function is used to iterate over each element in inputMsgLowcaseArr. It checks if the element exists in the lookup table and returns the corresponding key. If no match is found, the element itself is added to transferMsg.

e. Finally, transferMsg is joined into a string and returned as the encoded message.

Decode: If encode is false, the code executes the decoding logic.

a. inputMsgDecodeArray: The input string is split by spaces into an array called inputMsgDecodeArray. This array represents the encoded message.

b. Length validation: The code checks if the combined length of inputMsgDecodeArray is odd. If it is odd, it means the input is invalid, and false is returned.

c. transferArray array: This array is created to store the decoded message as a series of numbers.

d. Nested for loops: The loops iterate over each element in inputMsgDecodeArray. Each element is split into an array of individual characters. Then, within this array, the code takes every two characters at a time (num1 and num2) and adds them to transferArray as a combined string.

e. Adding spacing: After processing each element in inputMsgDecodeArray, the code adds a space character to transferArray to represent the spacing between words.

f. resultArray array: This array is created to store the decoded message.

g. map function: The map function iterates over each element in transferArray. If the element is not equal to a space character, it looks up the corresponding value in the lookup table and adds it to resultArray. If the element is a space character, it is directly added to resultArray.

h. Finally, resultArray is joined into a string, trailing whitespace is removed using trimEnd(), and the decoded message is returned.
 */
