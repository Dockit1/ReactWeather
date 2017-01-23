var names = ['Dale', 'Tharindu', 'Robin', 'Henry'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });

// names.forEach((name) => console.log('arrow', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Dackit'));

// var person = {
//   name: 'Dale',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };

// person.greet();

function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
};
console.log(addStatement(3,8));

var addExpression = (a, b) => console.log(a + b);
addExpression(1,2);

console.log(add(1,3));
console.log(add(9, 0));