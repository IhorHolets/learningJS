// Task 1 - add new fields name with value "Felix", and age - 7
const objWithNewFields = {};

// code here
objWithNewFields.name = "Felix";
objWithNewFields.age = 7;
//console.log(objWithNewFields);
// Task 1 - end

// Task 2 - add new field sum, that should contain sum of fields a + b
const objWithSum = {
  a: 10,
  b: 10
};

// code here
let a = objWithSum.a.valueOf();
let b = objWithSum.b.valueOf();
if(a>0 && b>0){
    objWithSum.sum = a + b
};
// console.log(objWithSum);

// Tsk 3 - end

// Task 3 - rewrite nums array with [2,3] array
const objWithNums = {
  nums: [1]
};
console.log (objWithNums.nums.toString());
objWithNums.nums = [2, 3];
console.log (objWithNums);
// code here

// Tsk 3 - end
// not needed
const objWithRes = {
  n: 3,
  res: "n is equal 3"
};

//export { objWithNewFields, objWithSum, objWithRes, objWithNums };
