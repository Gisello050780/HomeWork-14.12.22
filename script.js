//Что выведет этот скрипт?
// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello Ilya


//Какое последнее значение выведет этот код? Почему?
// let i = 3;
// while (i) {
//   alert( i-- );
// } // последнее значение 1, затем перестанет выходить сообщение, потому что i станет равным 0


// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выводят alert с одинаковыми значениями или нет?
// Префиксный вариант ++i:
// let i = 0;
// while (++i < 5) alert( i ); // 1-4, сначала увеличит, потом выведет
// Постфиксный вариант i++
// let a = 0;
// while (a++ < 5) alert( a ); // 1-5, сначала выведет, потом увеличит

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выведут alert с одинаковыми значениями или нет?
// Постфиксная форма:
// for (let i = 0; i < 5; i++) alert( i ); // 0-4
// Префиксная форма:
// for (let i = 0; i < 5; ++i) alert( i ); // 0-4


//При помощи цикла for выведите чётные числа от 2 до 10.
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//       alert( i );
//     }
//   }

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i =0;
// while(i < 3) {
//     alert( `number ${i}!` )
//     i++;
// }


// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
// let num;
// do {
//   num = prompt("Введите число больше 100");
// } while (num <= 100 && num);



// Напишите код, который выводит все простые числа из интервала от 2 до n.
// let n = 10; 
// for (let i = 2; i <= n; i++) { 
//     let isPrime = true;
//     for (let j = 2; j < i; j++) { 
//         if (i % j === 0) {isPrime = false; break;
//         }
//     }
//     if (isPrime) alert(i);
// }


// Что выведет следующий код?
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// // что в fruits?
// alert( fruits.length ); //   4


// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «"Классика"». 
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[1]="Классика";
// styles.shift[1];
// console.log(styles.shift());
// styles.unshift("Рэп", "Рэгги");
// console.log(styles);


//Каков результат? Почему?
// let arr = ["a", "b"];
// arr.push(function() {
//   alert( this );
// });
// arr[2](); // ['a', 'b', ƒ]


//Каким будет результат этих выражений?
// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false


//Что выведет код ниже?
// alert( null || 2 || undefined ); //2
// //Что выведет код ниже?
// alert( alert(1) || 2 || alert(3) ); //1 , 2
// //Что выведет код ниже?
// alert( 1 && null && 2 );//null
// //Что выведет код ниже?
// alert( alert(1) && alert(2) );//undefined
// //Что выведет код ниже?
// alert( null || 2 && 3 || 4 );//3


// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
// let age;
// if (age => 14 && age <= 90);


//Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
//Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
// if (!(age >= 14 && age <= 90));
// if (age < 14 || age > 90);


// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// let number = Number(prompt('Введите число'));
// if (number > 0) {
//   alert( 1 );
// } else if (number < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }