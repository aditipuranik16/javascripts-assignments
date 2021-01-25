//Question1
//-----------------------------------------------------------------------
console.log(1 + "2" + "2");//output -: 122
//Explanation -: prints 122 as + acts as an concatenation operator.

console.log(1 + +"2" + "2");//output -: 32
/*Explanation -: it is casted as an integer.
That one is the unary + operator, which converts "2" to a number.
and o/p will be 1 + +"2" = 3*/

console.log(1 + -"1" + "2");//output -: 02
/*Explanation -: That one is the unary - operator, which converts "1" to a number.
and o/p will be 1 + -"1" = 0*/

console.log(+"1" + "1" + "2");//output -: 112
//Explanation -: Prints 112 as + acts as an concatenation operator.

console.log( "A" - "B" + "2");//output -: NaN2
/*Explanation -:  If you used "+" then it will concatenate two string as "+" 
means concatenation.So "A"-"B" will be "NaN" and concate(+) 2 will produce "NaN2"*/

console.log( "A" - "B" + 2);//output -: NaN
/*Explanation -: If you are trying to use any operator expect "+" 
on string then it will display "NaN".*/

//Question2
var msg = 'enter the percentage of student:';
var marks = prompt(msg);;
if(marks>90){
    //if the mark is greater than 90 AA
      console.log('Grade - AA');
}
else if(marks<=90 && marks>80){
    //if the mark is greater than 80 and less than or equal to 90 - AB
    console.log('Grade - AB');
}
else if(marks>70 && marks<=80){
    //if the mark is greater than 70and less than or equal to 80 - BB
    console.log('Grade - BB');
}
else if(marks>60 && marks<=70){
    //if the mark is greater than 60 and less than or equal to 70 -BC
    console.log('Grade - BC');
}
else if(marks>50 && marks<=60){
    //if the mark is greater than 50 and less than or equal to 60 - CC
    console.log('Grade - CC');
}
else if(marks>40 && marks<=50){
    //if the mark is greater than 40 and less than or equal to 50 - CD
    console.log('Grade - CD');
}
else if(marks>30 && marks<=40){
    //if the mark is greater than 30 and less than or equal to 40
    console.log('Grade - DD');
    if(marks<=30){
        //if the mark is less than or equal to 30
        console.log('Grade - FF');
    }
}
else{
    console.log('Fail');
}
