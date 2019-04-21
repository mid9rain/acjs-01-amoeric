// 定義一個變數叫 numbers，是 5 ~ 15 的奇數陣列
let numbers = [5, 7, 9, 11, 13, 15];

// 這個函式接收一個陣列，回傳一個將原陣列中每個數字加 1 的陣列
function eachAddOne(list) {
  // write your code here
  let even = new Array(list.length)
  
  for(i=0; i<list.length; i++){
    even[i] = list[i] + 1
  }
  // console.log('even='+even)
  return even
}

let a = 0

function onlyEven(list) {
  
 let number = new Array()

  for(i=0; i<list.length; i++){
    
    if((list[i]&1) == 0){
   
      number[a] = list[i]
      a++
      
    }
  }
  list = number
  return list
}

module.exports = {numbers, eachAddOne, onlyEven}