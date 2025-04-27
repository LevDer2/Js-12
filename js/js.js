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

const employeers = {
    brobDev: {
        name: "BoBA",
        tasks: 5,
    },
    justDev: {
        name: "Some",
        tasks: 10,
    },
    lazyDev: {
        name: "naourami",
        tasks: 4,
    },
    freelancerForLife: {
        name: "Lev",
        tasks: 15,
    },
};
const findBestEmployee = function(employees){
    const keys = Object.keys(employees);
    let maxTasks = 0;
    let bestEmployee = "";

    for (let key of keys){
        const worker = employees[key];  
        const tasks = worker.tasks;
        
        if (tasks > maxTasks){
            maxTasks = tasks;
            bestEmployee = worker.name;
        }
    }

    return  console.log(`Найкращий працівник ${bestEmployee}! Тому , що він виконав ${maxTasks} тасків`);
    
};
console.log(findBestEmployee(employeers));