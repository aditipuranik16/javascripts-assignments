/*Question 1
Essential JavaScript DOM methods List -:
1)getElementById -:
-getElementId is a method to access any element virtually. It accesses the first element with the specified ID.

Syntax -:
document.getElementById();

Example -:
-This example finds the element with id="intro"
var myElement = document.getElementById("intro");

2)getElementsByTagName -:
-This method returns all the elements that matches the specified Tag name.

Syntax -:
document.getElementsByTagName();

Example -:
-This example finds all <p> elements
var x = document.getElementsByTagName("p");

3)getElementsByClassName() -:
-If you want to find all HTML elements with the same class name, use getElementsByClassName().

Syntax -:
document.getElementsByClassName();

Example -:
-This example returns a list of all elements with class="intro"
var x = document.getElementsByClassName("intro");


4)querySelectorAll() -:
-If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.

Syntax -:
document.querySelectorAll();

Example -:
-This example returns a list of all <p> elements with class="intro"
var x = document.querySelectorAll("p.intro");

*/

//Question 2

function add(){
    var a,b,c;
    a = Number(document.getElementById("first").value);
    b = Number(document.getElementById("second").value);
    c = a+b;
    document.getElementById("answer").value = c
}