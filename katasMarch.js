March 2022

It is written in the stars 03-07-22

function starSign(date) {

  let day = date.getDate()
  let month = date.getMonth()

  switch (month) {
    case 0:
      return day >= 21 ? "Aquarius" : "Capricorn"
      break;
    case 1:
      return day >= 20 ? "Pisces" : "Aquarius"
      break;
    case 2:
      return day >= 21 ? "Aries" : "Pisces"
      break;
    case 3:
      return day >= 21 ? "Taurus" : "Aries"
      break;
    case 4:
      return day >= 22 ? "Gemini" : "Taurus"
      break;
    case 5:
      return day >= 22 ? "Cancer" : "Gemini"
      break;
    case 6:
      return day >= 23 ? "Leo" : "Cancer"
      break;
    case 7:
      return day >= 24 ? "Virgo" : "Leo"
      break;
    case 8:
      return day >= 24 ? "Libra" : "Virgo"
      break;
    case 9:
      return day >= 24 ? "Scorpio" : "Libra"
      break;
    case 10:
      return day >= 23 ? "Sagittarius" : "Scorpio"
      break;
    case 11:
      return day >= 23 ? "Capricorn" : "Sagittarius"
      break;
    default:
      console.log('Enter a new Date');
  }

  return

}

Unlucky Days 03-06-22

function unluckyDays(year){
  let dateV =   new Date(year, 0);
  let count = 0;
  for (let month = 0; month < 12; month++){
      dateV.setMonth(month);
      dateV.setDate(13)
      dateV.getDay() === 5 ? count++ : null
    }
    return count
  }

Number Pairs 03-05-22

function getLargerNumbers(a, b) {
  let indexB = 0;
  let res =[];
  for (let elementA of a){
     elementA > b[indexB] ?  res.push(elementA):res.push(b[indexB])
     indexB++
    };
  return res;
}

Descending Order 03-04-22

function descendingOrder(n){
  n = n + '';
  let arr = n.split('');
  let arrNumber = arr.map(e => parseInt(e));
  return parseInt(arrNumber.sort((a,b)=> b-a).join(''))
}

Regex validate PIN code 03-03-22

function validatePIN (pin) {
 const reg = new RegExp(/^\d+$/);
 let digit = reg.test(pin);
 return ( pin.length === 4 || pin.length === 6) && digit ? true : false;
}

V A P O R C O D E 03-02-22

function vaporcode(string) {
  let allCharUpArr = string.replace(/ /g,"").toUpperCase().split("")
  return allCharUpArr.join('  ')
}


Fix string case 03-01-22

function solve(s){
  let upper = 0, lower = 0;
  for (let char of s){ 
    /[A-Z]/.test(char.charAt(0))? upper++ : lower++
  };
   return upper > lower  ? s.toUpperCase() : s.toLowerCase()
  }