//task 1
//a (Array.filter())
let arr1=[1,5,8,10,7,44,];
let result1=arr1.filter((element)=>element%2!==0);
console.log(result1);

//b(array.forech())
let arr2=[1,15,80,100,7,440,5];
 arr2.forEach((x)=>{
     if(x%2==0)
     console.log(x);
    });


//c(array.map())
let arr3=[1,5,8,10,7,44,15];
var result3=arr3.map((element)=>element*element);
console.log(result3);
 

//2(2.Try for…in, for…of and .foreach() with an array)
arr4=["manar","mony","logy","soly"];
for(let i in arr4)
{
    console.log(arr4[i]);
}

for(let i of arr4)
{
    console.log(i);
}

arr4.forEach(()=>arr4);
console.log(arr4);

//3(Try spread operator with any array of your implementation.)
let myArray = [0,1, 2, 3];
let	arr5=[8,9,10,...myArray]
console.log(arr5);


//4
var obj={"name":"manar","university":"Assiut","factuly":"FCI","final_grade":"A+"};
console.log(`${obj.name} is a student in faculty of ${obj.factuly} in university ${obj.university}
    And his final grad is ${obj.final_grade}.`);

//5 
var mySet=new Set();
mySet.add("nour");
mySet.add("nourhan");
mySet.add("nouran");
mySet.add("noury");
for(let r of mySet)
{
    console.log(r);
}
console.log([...mySet]);


//6 (a)
var tips=["write useful comments","refactor","avoid global code","use meaningful names","use meaningful structures"
,"use version control software","use automated bulid tools","use code documenters",
"use a testing framework","use a coding standard"];
function* generator(tips) {
    for(let i in tips)
    {
        yield tips[i];
    }
    
}
var z=generator(tips);
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());
console.log(z.next());

//6 (b)
function* display(tips) {
    for(let i in tips)
    {
        yield tips[i];
    }   
}
var z2=display(tips);
for(let i of z2)
{
console.log(i);
}

//6 (c)
function* generator2(tips) {
    for(let i in tips)
    {
        yield tips[i];
    }
    
}
var e=generator2(tips);
function display2() {
   setInterval(()=>
   {
     console.log(e.next());
   }
   ,3000);
}

//7
/*let myMap=new Map();
myMap.set("Mohamed",{Grades:[
    {Coursename:"JavaScript", Grade:"Excellent"},
    {Coursename:"Jquery", Grade:"Good"},
    {Coursename:"CSS", Grade:"V.Good"}]});

myMap.set("Zienab",{Grades:[
    {Coursename:"C#", Grade:"Excellent"},
    {Coursename:"C++", Grade:"Good"},
    {Coursename:"Java", Grade:"V.Good"}]});

myMap.set("Mahmoud",{Grades:[
    {Coursename:"Networks", Grade:"Excellent"},
    {Coursename:"Field Training", Grade:"Good"},
    {Coursename:"Computer Archetiture", Grade:"V.Good"}]});

for(let i of myMap.values)
{ 
    var x=myMap.values;
    console.log(x[i].Grades.Grade);
    console.log(x[i].Grades.Coursename);
}*/


