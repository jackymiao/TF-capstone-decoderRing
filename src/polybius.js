// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


//each letter has a number to match, unique value is I/J = 42
// use object store number as key, leter as value
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
