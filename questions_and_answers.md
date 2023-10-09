<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

<details><summary><b>A: {}</b></summary>
<p>

#### Answer: ?

<i>The answer will be A..It will console an empty Obj as it is declared..In the first line greeting is declared..Also we can initialize a variable name without using let,var,const..Because Javascript automatically add let,var,const before the varibale name.</i>

</p>
</details>

###### 2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");

- A: NaN
- B: TypeError
- C: "12"
- D: 3

<details><summary><b>C: "12"</b></summary>
<p>

#### Answer: ?

<i>The ans is C..it will return 12..it is not a number..It will return a String..As a parameter is String..it will concatenate a and b..</i>

</p>
</details>

###### 3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

- A:['🍕', '🍫', '🥑', '🍔']`
- B:['🍝', '🍫', '🥑', '🍔']`
- C['🍝', '🍕', '🍫', '🥑', '🍔']]`
- D: ReferenceError

<details><summary><b> A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>Answer will be A..As it is printing the Array..</i>

</p>
</details>

###### 4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

<details><summary><b>B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>The answer will be...It will return Hi there as it is...In the consolge log we are not sending a parameter into the function..Thats will name it will not recieve a parameter..Hence it will give an undefined</i>

</p>
</details>

###### 5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer: ?

<i>The first index has the number 0..So it will not enter in the If section..It will not increase the value of the count..But 1,2,3 is True..Hence for each of these count will increment by 1..Hence The final value of the count is 3</i>

</p>
</details>