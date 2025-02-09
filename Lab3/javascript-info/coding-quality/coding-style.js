function pow(x,n)  //no space between arguments
{ //curly brace on separate line
  let result=1; // no space
  for(let i=0;i<n;i++) {result*=x;}// no space, contents on a new line
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')//no space, better on separate lines
if (n<=0)//no space
{//braces are separate
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{//same with braces
  alert(pow(x,n))//no space
}