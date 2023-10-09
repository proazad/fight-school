<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>This question result is empty object. Beacuse first of all decalare variable then set a empty object. Thats its console empty object.</i> 
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>This code ans should be nothing, beacuse sum funciton return string but don't give output like console or UI Output. sum funciton take 2 parameter a & b . when calling function calling there are 2 argument given but they are deffent type data first one is number type data and last one is string type data. We know in the JS string + number = string. So Thats code answere will "12" if you console this function.   </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>This code answere is definetly A. Beacuse if you notice that first of all declare array which name "food". Secondly declare object which name is "info". But there object property favoriteFood value is taken from food array 1st value And then change favoriteFood property value .  Its change object property favoriteFood value. But its never change food value. It change only object value. for thats why if you console food array it will give you same array </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>I say with my confident this code output will be "Hi there, undefined". Okay I give you explanation about my answere. Fistly Declared a function named  sayHi() thats function tage on parameter thats name "Name". In this function return "Hi There, and name parameter" but when calling this SayHi() function don't given name argument. Thats why function name parameter don't find  value and its return undefind. and full function Return "Hi there, undefined" </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 3

<i>for above code result will be 3 . Beacuse here first declare a variable with value 0 . then declare a array variable with some integer number. There four number 0, 1,2,3  then looping in this array and get every single number. In the loop check if number looping item is true then count increment if looping item is false continue loop. We know JS count "0" as a false value. thats why 0 number of of ofset return false. Thats why there answere will be 3 beacuse there are 3 truthy value and one falsy value. There count truthy value.</i>

</p>
</details>
