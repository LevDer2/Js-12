// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    name: "Lev",
    age: 13,
    hobby: "programming",
    premium: true,
}

user.mood = "Normal";
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
console.log(keys);
console.log(user);

for (let i of keys) {
console.log(`${i}: ${user[i]}`);

}