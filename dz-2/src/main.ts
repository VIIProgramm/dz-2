import './style.css'

// 1 Задание
function stepen (n :number, k:number):number{
  let cN = n
  if (k > 0){
    for(let i = 0; i < (k - 1); i++){
      cN = cN * n 
    }
    return cN
  }
  if (k < 0){
    for(let i = 0; i > (k + 1); i--){
      cN = cN * n
    }
    return 1/cN
  }
  return 1
}

alert(stepen(2, 2))
