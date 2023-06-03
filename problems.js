// Given three array, with elements at the same index related to each other. Give the number of duplicate values.

const firstArray = ['hello','hello', 'hi', 'howiseverything', 'kin','kin','kin']
const secondArray = [1,1,2,1,1,2,1]
const thirdArray = [1,2,2,1,1,2,1]

const testFunction = (a,b,c) => {
  let newArray = [] 
  for(let i = 0; i<a.length; i++){
    const newObj = {
      name: a[i],
      kin: b[i],
      kon: c[i]
    }
    newArray.push(newObj)
  }

   let filterArray = []
    newArray.forEach((item) => {
      if(!filterArray.find(obj => obj.name === item.name && obj.kin === item.kin && obj.kon === item.kon)){
        filterArray.push(item)
      }
  })


  


  return newArray.length - filterArray.length
}

console.log(testFunction(firstArray,secondArray,thirdArray))