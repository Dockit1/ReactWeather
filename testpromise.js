function prom(a, b) {
  return new Promise(function(resolve,reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & B Must be numbers, bro!');
    }
  });
}

prom('dale', 2).then(function(sum) {
  console.log('success', sum);
}, function(err) {
  console.log('error', err);
});

prom('dale', 3).then(function (sum) {
  console.log('this shouldn\'t show');
}, function (err) {
  console.log('this should appear');
});