'use strict'

// Створити функцію яка б отримувала параметром масив з елементів різних типів (строки, масиви, числа, об’єкти і т.д), 
// на виході має повернути строку у camel case (приклад строки у camel case: thisIsExampleOfTheCamelCase), яка б поєднувала в собі всі елементи масиву які є строками.
let toCamelCase = (arr) => {
    let resultArr = arr.filter(elem => { return typeof elem === 'string' ? elem : false})
    .map((elem) => { return elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase() })
    .join('');
    return resultArr.charAt(0).toLowerCase() + resultArr.slice(1);
}

// Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, і повертала б масив у якому кожен елемент масиву є літерою англійського алфавіту
// відповідний конкретному елементу масива (наприклад 1 = a, 2 = b, 3 = c, 4 = d, …). Приклад [4, 3, 22, 11] - в результаті маємо отримати [d, c, v, k]
let numToNumber = (arr) => {
    let resultArr = arr.filter(elem => { return elem >= 1 && elem <= 26 ? elem : false})
    .map(elem => { return (elem + 9).toString(36) }) // також можна завернути все це у функцію
    return resultArr;
}

// Створити функцію яка параметром отримує об’єкт (наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) і повертає новий об’єкт у який містить тільки числа більші рівні 0.

let sortObject = (obj) => {
    let resultObj = Object.fromEntries(
        Object.entries(obj).filter(([key, val]) => { return val >= 0 ? [key, val] : false})
    );
    return resultObj;
}
