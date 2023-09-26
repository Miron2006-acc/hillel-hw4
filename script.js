// Запит користувача про операцію
let operation = prompt("Виберіть операцію (add, sub, mult, div):");

// Запит першого числа
let num1 = parseFloat(prompt("Введіть перше число:"));

// Запит другого числа
let num2 = parseFloat(prompt("Введіть друге число:"));

let result;

// Виконання вибраної операції та виведення результату
switch (operation) {
    case "add":
        result = num1 + num2;
        console.log(num1 + " + " + num2 + " = " + result);
        break;
    case "sub":
        result = num1 - num2;
        console.log(num1 + " - " + num2 + " = " + result);
        break;
    case "mult":
        result = num1 * num2;
        console.log(num1 + " * " + num2 + " = " + result);
        break;
    case "div":
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(num1 + " / " + num2 + " = " + result);
        } else {
            console.log("Ділення на нуль неможливе.");
        }
        break;
    default:
        console.log("Невірна операція. Виберіть add, sub, mult або div.");
}
