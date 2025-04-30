// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

// const user = {
//     name: "Lev",
//     age: 13,
//     hobby: "programming",
//     premium: true,
// }

// user.mood = "Normal";
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// console.log(keys);
// console.log(user);

// for (let i of keys) {
// console.log(`${i}: ${user[i]}`);

// }

// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

// const user = {
//     name: "Lev",
//     age: 13,
//     hobby: "programming"
//   };
  
//   const countProps = function(obj) {
//     const keyy = Object.keys(obj);
//     return console.log(`${keyy.length}`);
// };
//   countProps(user);

//   Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

// const work = {
//   vlad: 20,
//   mukola: 50,
//   lev: 100,
//   nazar: 110,
//   vlad2: 54,
//   david: 70,
// }

// const findBestEmployee = function (employees) {
//   let mostValue = '';
//   let maxValue = 0;
//   for (const employ in employees) {
//       // console.log(employ); // ім'я
//       // console.log(employees[employ]); // число
//       if (employees[employ] > maxValue) {
//           maxValue = employees[employ]
//           mostValue = employ;
//       }
//   }
//   return `${mostValue}: ${maxValue}`
// }

// console.log(findBestEmployee(work));


// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

// const countTotalSalary = function(employees) {
//     let totalSalary = 0;
//     const values = Object.values(employees);
    
//     for (let i of values) {
//       totalSalary += i;
//       console.log(totalSalary);
//     }
    
//     return totalSalary;
//   }
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     }),
//   ); // 330

//   Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

// const getAllPropValues = function (arr, prop) {
//     // console.log(arr);
//     // console.log(prop);
//     let result = []
//     for (const item of arr) {
//       // console.log(item);
//       // console.log(item[prop]);
//       result.push(item[prop])
//     }
//     return result
// };

//   const products = [
//     { 
//       name: 'Радар', 
//       price: 1300, 
//       quantity: 4 },
//     { 
//       name: 'Сканер',
//        price: 2700, 
//        quantity: 3 },
//     { 
//       name: 'Дроїд', 
//       price: 400, 
//       quantity: 7 },
//     { 
//       name: 'Захоплення', 
//       price: 1200, 
//       quantity: 2 },
//   ];
  
  


// console.log(getAllPropValues(products, "name"));
// console.log(getAllPropValues(products, "price"));
// console.log(getAllPropValues(products, "quantity"));

// Завдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

const calculateTotalPrice = function (allProdcuts, productName) {
  // console.log(allProdcuts);
  // console.log(productName);
  for (const product of allProdcuts)  {
    // console.log(product);
    if (product.name === productName) {
      const result = product.price * product.quantity
      return `Загальна сума ${product.name} = ${result}`
    }
  }
};

  const products = [
    { 
      name: 'Радар', 
      price: 1300, 
      quantity: 4 },
    { 
      name: 'Сканер',
       price: 2700, 
       quantity: 3 },
    { 
      name: 'Дроїд', 
      price: 400, 
      quantity: 7 },
    { 
      name: 'Захоплення', 
      price: 1200, 
      quantity: 2 },
  ];

console.log(calculateTotalPrice(products, "Сканер"));
console.log(calculateTotalPrice(products, "Радар"));
console.log(calculateTotalPrice(products, "Дроїд"));
console.log(calculateTotalPrice(products, "Захоплення"));