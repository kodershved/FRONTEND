/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

const numbersList1 = [1, 2, 3, 4, 5];
const lastNumber = numbersList1.pop();
console.log(lastNumber);
console.log(numbersList1);

// put your code here

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

const numbersList2 = [1, 2, 3, 4, 5];
const result2 = numbersList2.push(6);
console.log(result2);
console.log(numbersList2);

// put your code here

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

const numbersList3 = [1, 2, 3, 4, 5];
const result3 = numbersList3.shift();
console.log(result3);
console.log(numbersList3);

// put your code here

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

const numbersList4 = [1, 2, 3, 4, 5];
const result4 = numbersList4.unshift(0);
console.log(result4);
console.log("Res4:" + numbersList4);

// put your code here

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

// начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
const bigNumbers = anotherNumbersList.filter((a) => a > 5);
console.log(bigNumbers);
const evenPositions = anotherNumbersList.filter((a) => a > 5 && a % 2 === 0);
console.log(evenPositions);

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// put your code here

// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

// put your code here
