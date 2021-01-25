//Question1

const clothes = ['jacket','t-shirt'];
clothes.length =0;
console.log(clothes[0]);
//output -: undefined

/*length property of the array object has a special behavior:
Reducing the value of the length property has the side-effect of deleting own array 
elements whose array index is between the old and new length values.Because of this
length behavior, when JavaScript executes clothes.length = 0, 
all the items of the array clothes are deleted.
clothes[0] is undefined, because clothes array was emptied.*/


//Question2

arr = [1,2,3,4,5];
sum = 0;

for(i=0;i<arr.length;i++){
    sum = sum + arr[i];
}

console.log("sum of all elements: ",sum);

//output : sum of all elements:  15