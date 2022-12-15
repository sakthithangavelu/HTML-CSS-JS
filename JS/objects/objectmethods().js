//Object.assign() - method copies all enumerable own properties from one or more source objects to a target object.
const first = { a : 1, b : 2};
const second = { b : 3, c : 4};

const updated = Object.assign(first,second);
console.log(updated);

//Object.freeze() method freezes an object.
const one = { b : 2};
Object.freeze(one)
one.b = 3;
console.log(one.b);