February 2022


Highest and Lowest 02-28-22

function highAndLow(numbers){
   numbers = numbers.split(' ');
   const max = Math.max(...numbers);
   const min = Math.min(...numbers);
   return `${max} ${min}`
}

Compress sentences 02-27-22

function compress(sentence) {
 let  wordArr = sentence.toLowerCase().split(" ")
 let res =""
 let cleanArr = new Set(wordArr)
 let result = [...cleanArr]

 for (let i = 0; i < wordArr.length; i++){
      res =  res + (result.indexOf(wordArr[i]))
 }
          return res
}

Pirates!! Are the Cannons ready!?? 02-26-22

const cannonsReady = (gunners) => {
  for(let prop in gunners){ 
    if (gunners[prop] === 'nay') return  'Shiver me timbers!'
  }
  return 'Fire!'
}

List Filtering 02-25-22

function filter_list(l) {
return l.filter(number => typeof number === 'number' )
}

Isograms 02-24-22

function isIsogram(str) {
  let checkString = str.toLocaleLowerCase();
  for (let char of str.toLocaleLowerCase()) {
    checkString = checkString.substring(1);
    let res = checkString.includes(char);
    if (res) return false;
  }
  return true;
}

Reverse words 02-23-22

function reverseWords(str) {
   let newString = "";
   let array = str.split(" ");
   for (word of array) {
     reverseW = word.split("").reverse().join("") 
     newString = newString + reverseW + " "
 }
  return newString.slice(0,-1)
}

Get the Middle Character 02-22-22

function getMiddle(s){
  return s.length%2 === 0 ? s.charAt(s.length/2 -1) + s.charAt(s.length/2) :  s.charAt(s.length/2)
}

Is n divisible by x and y? 02-22-22

function isDivisible(n, x, y) {
 return (n%x) == 0 && (n%y) == 0 ? true : false
}

Exclamation marks series #1: Remove an exclamation mark from the end of string 02-21-22

function remove (string) {return (string.substr(-1) == "!")?  string.slice(0,-1,): string }

Total amount of points 02-20-22

function points(games) {
  let final = 0
  for (let i of games){ 
  Number(i[0]) > Number(i[2]) ? final=final+3 : Number(i[0]) == Number (i[2]) ? final++ : null
  }
  return final
}

Closest elevator 02-19-22

function elevator(left, right, call){
  let distanceR = call - right
  let distanceL = call - left
   return  Math.abs(distanceR) > Math.abs(distanceL)? "left" : "right"
}

Even or Odd 02-18-22

function even_or_odd(number) {
  return number % 2 === 0 ?  "Even" : "Odd";
}


Is it a palindrome? 02-17-22

function isPalindrome(x) {
  let lowX = x.toLocaleLowerCase() 
   for (let i=0; i<lowX.length/2;i++){if(lowX[i] !== lowX[lowX.length - (i+1)] )return false}
  return true
}


A Needle in the Haystack 02-16-22

function findNeedle(haystack) {
 return "found the needle at position "+ haystack.findIndex(element=> element ==="needle")
}

Sum The Strings  02-15-22

function sumStr(a,b) {
  let numberA =parseInt(a);
  let numberB =parseInt(b);
  Number.isNaN(numberA) ? numberA = 0: null
  Number.isNaN(numberB) ? numberB = 0: null
  return (numberA+numberB).toString()
}


Remove First and Last Character 02-14-22

function removeChar(str){return str.slice(1, -1)};

Area or Perimeter 02-13-22

const areaOrPerimeter = function(l , w) { return (l === w ? l*w : (l*2)+(w*2))};

Well of Ideas - Easy Version 02-12-22
function well(x) {
  let numberGood = 0;
  for (result of x) {
    if (result === "good") {
      numberGood++;
    }
  }
  if (numberGood === 0) {
    return "Fail!";
  } else {
    return numberGood > 2 ? "I smell a series!" : "Publish!";
  }
}
