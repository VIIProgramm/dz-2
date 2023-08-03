import './style.css'

// 1 Задание
function stepen (x :number, p:number) :any{
  if (x == 0 && p <= 0) {return ("Невозможно возвести 0 в степень меньше 1")}
  if (x == 1 || x == 0) {return x}
  if (p > 1) {return x * stepen(x, --p)}
  if (p < 1) {return 1 / x * stepen(x, ++p)}
  return x
} 


console.log(stepen(2, 2))

let date = new Date()

function getLocalDay(day:Date){
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
  return days[day.getDay()]
}

console.log(getLocalDay(date))


//?------------------

function getDateAgo( d:Date, n: number){
  d.setDate(d.getDate() - n)
  return d.getDate()
} 

console.log( getDateAgo(new Date(), 1) )
console.log( getDateAgo(new Date(), 2) )
console.log( getDateAgo(new Date(), 365))

//?-----------------

console.log(date.get)
