//What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
} // answer : 1 alert(i--): shows 3, decreases i to 2, alert(i--): 
//shows 2, decreases i to 1, alert(i--): shows 1, decreases 1 to 0
//done
//For every loop iteration, write down which value it outputs and then compare it with the solution.

//Both loops alert the same values, or not?

//The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );

//The postfix form i++

let i = 0;
while (i++ < 5) alert( i );
/*1. from 1 to 4 
the first value is 1 because ++i first increments i and then returns the value 
2. from 1 to 5
the postfix increments i but returns old value, and then alert returns 1 because it is a separate action 
which executes after incremention. 
i stops at 4, i++ increments i bit returns old value. 
hence the comparison is actually 4<5 control goes to alert which uses the last value i=5 
and it's the last one step cause 5<5 is false*/

// For each loop write down which values it is going to show. Then compare with the answer.

// Both loops alert same values or not?

// The postfix form:

for (let i = 0; i < 5; i++) alert( i );
// The prefix form:

for (let i = 0; i < 5; ++i) alert( i );

// answer: from 0 to 4 in both cases 
// 1. execute once i=0 before everything
// 2. check the condition i<5
// 3. if true - execute the loop body alert(i) and then i++

//Use the for loop to output even numbers from 2 to 10.
for(let i = 2; i<=10; i++){
    if(i%2==0){
        alert(i);
    }
}

//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
let i = 0;
while(i<3){
    alert(`number ${i}!`);
    i++;
}

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.


let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}
