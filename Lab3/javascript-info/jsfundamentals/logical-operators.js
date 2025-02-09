//What is the code below going to output?

alert( null || 2 || undefined ); //2


//What will the code below output?

alert( alert(1) || 2 || alert(3) ); //the alert will be played but 
//alert returns Undefined so OR goes on and returns 2 since 2 is truthy value 

//What is this code going to show?

alert( 1 && null && 2 ); //null

//What will this code show?

alert( alert(1) && alert(2) ); //shows 1 and then undefined

//What will the result be?

alert( null || 2 && 3 || 4 ); //3

//Write an if condition to check that age is between 14 and 90 inclusively.

//“Inclusively” means that age can reach the edges 14 or 90.
if(age >=14 && age <=90)

//Write an if condition to check that age is NOT between 14 and 90 inclusively.

//Create two variants: the first one using NOT !, the second one – without it.
if(age <=14 || age >=90)
if(!(age >= 14 && age <= 90))

//Which of these alerts are going to execute?

//What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); //executes
if (-1 && 0) alert( 'second' ); //doesn't execute 
if (null || -1 && 1) alert( 'third' ); //executes

let userName = prompt("Who's there?","");
if(username==='Admin'){
    let pass = prompt('Password?', '');
    if(pass === 'TheMaster'){
        alert('Welcome!');
    } else if (pass === '' || pass === null){
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
}



