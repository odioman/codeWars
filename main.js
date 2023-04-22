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
  