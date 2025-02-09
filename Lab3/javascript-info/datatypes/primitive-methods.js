//Consider the following code:

let str = "Hello";

str.test = 5;

alert(str.test);
//What do you think, will it work? What will be shown?

//it won't work, TypeError: Cannot create property 'test' on string 'Hello' is shown
