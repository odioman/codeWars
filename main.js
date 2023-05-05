//Training JS #5: Basic data types--Object

function animal(obj){
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
  }

  function arrayToObject(arr){
    const arrReduce = arr.reduce((totalProps, numberOfProps) => {
      if (totalProps[numberOfProps]) {
        totalProps[numberOfProps] = totalProps[numberOfProps] + 1
      } else {
        totalProps[numberOfProps] = 1
      }
      return totalProps;
    }, {})
    return arrReduce
  }
  
  function objectToArray(obj){
    const objKeys = Object.keys(obj);
    console.log(objKeys)
    let arr = [];
    objKeys.forEach(key => {
      let numberOfOcc = obj[key]
      for (let i = 0; i < numberOfOcc; i++) {
        if (!isNaN(key)) {
          arr.push(Number(key))  
        } else if (typeof key === 'string') {
          arr.push(String(key))      
        }  
      }
    })
    return arr
  }

/* Between Extremes Kata */

function betweenExtremes(numbers) {
    const max = numbers.reduce((a, b) => {
      if (a > b) {
        return a
      } else {
        return b
      }   
    }) 
    
    const min = numbers.reduce((a,b) => {
      if (a < b) {
        return a
      } else {
        return b
      }
    }) 
    const diff = max - min
    return diff
  }

  /* Decreasing Inputs */
  function add(...arguments) {
    if (arguments.length === 0) {
      return 0
    }
    const answer = arguments.reduce((a,b,i) => {
      return a+b/(i+1)
    }, 0)
    return Math.round(answer)
  }
  //passes all the tests now

  /* Even or Odd */
  function evenOrOdd(number) {
    if (number % 2 === 0) {
      return 'Even'
    } else {
      return 'Odd'
    }
  }

  /* Convert Number to reverse array of digits */
  function digitize(n) {
    const stringN = String(n);
    const splitN = stringN.split('');
    const reverseN = splitN.reverse();
    const mapN = reverseN.map(n => Number(n));
    return mapN
  } 

  /* Remove String Spaces */
  function noSpace(x){
    const splitX = x.split(' ');
    const joinX = splitX.join('');
    return joinX
  }
  /* Disemvowel Trolls */
  function disemvowel(str) {
    const strSplit = str.split('');
    const strSplitFilter = strSplit.filter(consonants => !['a','e','i','o','u','A','E','I','O','U'].includes(consonants));
    const joinStr = strSplitFilter.join('');
    return joinStr;
  }
  
  /* Count By X*/
  function countBy(x, n) {
    let arr  = [];
    for (let i = 0; i < n; i++) {
      const multiple = x + (x*i);
      arr.push(multiple)
      console.log(arr)
    }
    return arr
  }

  /* A Needle in the Haystack*/
  function findNeedle(haystack) {
    const needleIndex = haystack.findIndex((element) => element === 'needle');
    return `found the needle at position ${needleIndex}`
  }

  /* You Only Need One - Beginner */
  function check(a, x) {
    const checkForX = a.some((element) => element === x)
    return checkForX
  }

  /* Job Matching #1*/
  function match(candidate, job) {
      if (candidate.minSalary - (candidate.minSalary * 10/100) <= job.maxSalary) {
        return true;
      } else if (candidate.minSalary === undefined) {
        throw new Error("No minimum salary provided"); 
      } else if (job.maxSalary === undefined) {
        throw new Error("No maximum salary provided"); 
      } else {
        return false;
      }
    }

/* Building blocks*/
class Block{
    constructor(data){
      this.width = data[0];
      this.length = data[1];
      this.height = data[2];
    }
    
    getWidth() {
      return this.width;  
    }
    
    getLength() {
      return this.length;
    }
    
    getHeight() {
      return this.height;
    }
    
    getVolume() {
      return this.width * this.length * this.height;
    }
    
    getSurfaceArea() {
      return 2 * ((this.width * this.length) + (this.height * this.length) + (this.height * this.width))
    }

}

/* Get Nth Even Number*/
function nthEven(n){
    return (n * 2) - 2
 }

/* DNA to RNA Conversion */
function DNAtoRNA(dna) {
    const letterT = /T/gi
    const uReplaceT = dna.replace(letterT, 'U')
    return uReplaceT
}

/* Holiday III - Fire on the Boat*/
function fireFight(s){
    const splitS = s.split(' ')
    const mapSplit = splitS.map(str => str.replace(/Fire/gi, '~~'))
    const joinSplit = mapSplit.join(' ');
    return joinSplit
  }

/*Reversed Strings*/
function solution(str){
    const splitReverseJoinStr = str.split('').reverse().join('');
    return splitReverseJoinStr
  }

/* Get the Middle Character */
function getMiddle(s) {
    if (s.length % 2 === 0) {
      const sliceS = s.slice((s.length/2) - 1, (s.length/ 2) + 1)
      return sliceS
    } else {
      const sliceS = s.slice((s.length/2), (s.length/2) + 1)
      return sliceS
    }
  }

/* Return Negative */
function makeNegative(num) {
    if (num <= 0) {
      return num
    } else {
      return -num
    } 
  }

/* 'this' is a problem */
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = first + ' ' + last;
}

let n = new NameMe('John', 'Doe')

/* Capitalize first letter of a string */
String.prototype.capitalize = function() {
    let firstChar = this.charCodeAt(0);
    if (firstChar >= 97 && firstChar <= 122) {
      firstChar -= 32
    }
    return String.fromCharCode(firstChar) + this.slice(1)
  }