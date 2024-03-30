const fruits = ['appple', 'banana', 'orange', 'grape', 'kiwi'];
console.log('Fruits: ' + fruits);
console.log('Lenght of fruits: ' + fruits.length);
console.log('Element at Index 2: ' + fruits[2]);
console.log('Last element of fruits: ' + fruits[fruits.length - 1]);

const vegetables = [];

for (let i = 1; i <= 3; i++) {
  const userinput = prompt('enter a vegetable');
  vegetables.push(userinput);
}

console.log('Vegetables: ' + vegetables);
console.log('Lenght of vegetables: ' + vegetables.length);
