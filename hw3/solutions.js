'use strict'

// Створити пустий об’єкт;

let emptyObj = {};

// Створити пустий об’єкт без прототипу;

let noProtObj = Object.create(null);

// Додати до об’єкта будь які нові поля всіма відомими способами;

emptyObj.name = "Sasha";
emptyObj['age'] = 21;

// Створити пустий масив;

let emptyArr = [];

// Створити пустий масив довжиною 100500 елементів;

emptyArr.length = 100500;

// Створити масив з декількома елементами;

let arr = [1, 2];

// Зробити заповнений масив пустим;

arr = [];

// Дано масив, [1,2,3,4,5], потрібно створити функцію, яка видалить певний елемент з 
// масиву за його індексом та поверне новий масив(оновлений- після видалення);

arr = [1,2,3,4,5];
let newArr = [];
let removeElem = (a, i) => {
    newArr = a;
    newArr.splice(i, 1);
    return newArr;
}

// Створити функцію, яка приймає один масив у якості аргументу та повертає булеве 
// значення в залежності чи в неї передали пустий масив чи ні;

let isNullArray = (a) => {
    let result = a.length === 0 ? true : false;
    return result;
}

// Створити функцію, яка приймає один об’єкт у якості аргументу та повертає 
// булеве значення в залежності чи в неї передали пустий об’єкт чи ні;

let isNullObject = (o) => {
    let result = Object.keys(o).length === 0 
    && Object.getPrototypeOf(o) === Object.prototype ? true : false;
    return result;
}

// Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;

let toMerge = (a1, a2) => {
    let result = a1.concat(a2);
    return result;
}

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає 
// новий масив, який складається з елементів попереднього в степені 3. 
// Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];

let res = [];
let toThirdDegree = (a) => {
    for (let elem of a) { 
        res.push(elem ** 3);
    }
    return res;
}

// Analog

let res2 = [];
let toThirdDegree2 = (a) => {
    a.forEach(element => res2.push(element ** 3));
    return res2;
}

// Створити функцію, яка приймає один масив чисел у якості аргументу та 
// повертає новий масив, який складається з непарних елементів вхідного масиву;

let oddArray = [];
let makeOdd = (a) => {
    a.forEach(element => {
        if (element % 2) {
            oddArray.push(element);
        }
    })
    return oddArray;
}

// Створити функцію, яка приймає один масив чисел у якості аргументу та 
// повертає новий масив, який складається тільки з цілих елементів вхідного масиву;

let iArr = []
let isInt = (a) => {
    a.forEach(element => {
        Number.isInteger(element) ? iArr.push(element) : false;
    })
    return iArr;
}

// Створити функцію, яка нічого не повертає;

let greetings = () => {}
