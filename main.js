//console.log("Добро пожаловать в вебку");
//let Number1 = 4;
//let Number2 = 6;
//let number_summ = Number1 + Number2;
//console.log (number_summ);
//let i = 5
//let c ="5"
//console.log (i & c)
//let q = true;
//let b = false;
//console.log(q || b)
// let temperature = -15;
// if (temperature > 20) {
//     console.log("жарко")
// }else if (temperature >15) {
//     console.log("умеренно")
// }else{
//     console.log("холодно")
//  }
// for (let i = 0; i< 5; i++){
//     console.log("ждем", i)
// }





// =========№1
let price = Number(prompt("Введите цену:"))

let range = prompt("Введите промежуток (month, day, week):")

if (range == "month") {
  console.log(price + " Р в месяц");
}else if (range == "day") {
  console.log(price + "Р в день");
}else if (range == "week") {
  console.log(price + "Р в неделю");
}else {
  console.log("чет неправильно");
}





// =========№2
let temp = Number(prompt("Введите температуру:"))
let weather = prompt("Введите погоду (clear, cloudy)")
let activity

if (temp >= 25 && weather === "clear") {
  activity = "golf"
} else if ((temp >= 10 && temp <= 24) || weather == "cloudy") {
  activity = "bowling"
} else {
  activity = "hiking"
}

console.log(activity);


// =========№3
let a = Number(prompt("Введите значение a: "))
let b = Number(prompt("Введите значение b: "))
let sign = prompt("Введите оператор (+, -, *, /): ")
let i
switch (sign) {
    case '+':
        i = a + b
        console.log(i)
        break;
    case '-':
        i = a - b;
        console.log(i)
        break;
    case '*':
        i = a * b;
        console.log(i)
        break;
    case '/':
        if (b == 0) {
            console.log("Не надо такого")
        } else {
            i = a / b;
            console.log(i)
        }          
        break;
    default:
        console.log("чет не так") 
}


// =========№4
let word = prompt("Введите слово:")

let n = Number.isInteger(Math.sqrt(word.length))
let result = n ? 1 : 0

console.log(result)

