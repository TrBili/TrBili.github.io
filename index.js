// alert ("I like pizza");
// console.log("I really really enjoy pizza!");
// var age= 21;
// age= age+1
// console.log("your age is "+ age);
// var firstname= "Bro";
// // variable initial is lowercase
// var lastname
// var online =true;
// var myCoolVariable;
// console.log("hello",firstname);
// const pi= 3.14159265358;
// pi = 4;
// console.log(pi);

// arithmetic expression
// var friends= 10;
// friedns= friends+1
// console.log(friendss);

// var remainingfriend= friends/=2;
// console.log(remainingfriends);


//        +++++++Two ways for user input++++++++

// var myName= window.prompt("What is my name?");
// console.log("Hello",myName);

// document.getElementById("mybutton").onclick= function(){

//     var myName= document.getElementById("mytext").value
//     console.log("Hello",myName)
// };

//       ++++++++++ Unit Conversions==========
// var age= window.prompt("What is your current age?");
// console.log("Happy Birthday");
// console.log(typeof age);
// age=Number(age);
// age+= 1;
// console.log(age);
// age=String(age);
// age=Boolean(age);

//      $$$$$$$$$$$$$$$$$$$$$$$$$$$$$functions $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// function returnknowledge(){
//     console.log("your name is "+myName)
//     console.log("You are", myage,"years old!")
// };
// var myName="BIlly";
// var myage= 21

// returnknowledge();

// function myCelsius(f){
//     return (f-32)*5/9
// };
// var myTemp= myCelsius(100);
//  console.log("Today's temperature is "+myTemp,"Celsisus!");

// function myFahrenheit (c){
//     return 9/5*c+ 32
// };
// var todayFahrenheit= myFahrenheit(100);
// console.log("Tomorrow's temperature is "+todayFahrenheit, "drgrees in Fahrenheit?");

// function moleculesinmole(moles){
//     var mymolecules= moles*6.022*10**23;
//     console.log(mymolecules);
// };

// moleculesinmole(50);

// function userinput(){
//     var inputyou= window.prompt("What is your name, mydear...");
//     console.log("Ohh, your majesty, my apology for knowing you so late!",inputyou);
// };

// userinput();


//  @@@@@@@@@@@@@@@@@@@@@@@@@ objects (similar to dictionaries in Python)@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// var human3= {
//     name: "Billy",
//     age: 16,
//     eat: function(){
//         console.log("Billy is eating yogya fish.");
//     },
//     sleep: function(){
//         console.log("Billy is snorting!")
//     },
//     drink: function(){
//         console.log("Billy is drinking orange jucice?")
//     },
//     entertainment: function(){
//         console.log("Billy is playing tetris!")
//     }
// };

// console.log(human3.name);
// console.log(human3['age']);
// human3.eat();
// human3.sleep();
// human3.entertainment();
// human3.drink();
 
// %%%%%%%%%%%%%%%%%%%%%%%%%% arrays (similar to lists in Python) %%%%%%%%%%%%%%%%%%%%%%%%%%
//  var cars= ["Mustang","Corvette","Jaguar"]
//  console.log(cars[0]);
//  console.log(cars[1]);
//  console.log(cars[2]);

//  numbers= cars.length;
//  console.log(cars[numbers-1]);

//  cars.push("Honda");
//  console.log(cars);
//  cars.pop();
//  console.log(cars[2]);
//  var lastcar= cars[cars.length-1]; ++++++++can assign specific element in an array+++++++++
//  console.log(lastcar);


//  ************************* If statement **************************
// var age=-10;
// if(age>= 18){
//     console.log("You are an adult!");
// }
// else if(age>= 65){
//     console.log("You are a senior!");
// }
// else if(age<0){
//     console.log("You haven't been born yet!");
// }
// else{
//     console.log("U r a child!");
// };


// var online= false;
// if(online){
//     console.log("This person is online.");
// }
// else{
//     console.log("This person is offline!")
// };

// ########################## Switch statement : more efficient than else if statement(making comparisons )##########################

// var grade="B";
// switch (grade){
//     case "A":
//         console.log("You did fantstic!");
//         break;
//     case "B":
//         console.log("You did Good!");
//         break;
//     case "C":
//         console.log("Youd did okay!");
//         break;
//     case "D":
//         console.log("You did not do that well!");
//         break;
//     case "F":
//         console.log("YOU FAILED!");
//         break;
//     default:
//         console.log(grade,"is not a letter grade!");
// };

// &&&&&&&&&&&&******************** Locial Operators **********************************
// ex1
// var temp="15";
// if(temp>30){
//     console.log("It's hot outside!");
// }
// else if(temp<30 && temp>0){   // && stands for "and"
//     console.log("It's warm outside!");
// }
// else{
//     console.log("It's cold outside!");
// };

// ex2
// var millitary=19;
// if(millitary<6 || millitary>=20){ // "||" stands for "or"
//     console.log("It's still dark outside, let's chill!");
// }
// else {
//     console.log("It's bright outside, get up for rehearsal");
// };

// // ex3
// var myname= window.prompt("What is your name?");

// if(myname!= ""){ // if(!(myname=="")) is another way of expressing the same notion.
//     console.log("Hello", myname);
// }
// else{
//     console.log("You haven't entered your name!");
// };

// ((((((((((((((((((((((((((((While loop))))))))))))))))))))))))))))
// var creditnum= window.prompt("YOUR COMPUTER HAS A VIRUS! ENTER YUOUR CREDIT CARD INFO... OR ELSE!");

// while(creditnum==""){
//     var creditnum= window.prompt("YOUR COMPUTER HAS A VIRUS! ENTER YUOUR CREDIT CARD INFO... OR ELSE!");
// }
// console.log("THANK YOU! YOUR COMPUTER NO  LONGER HAS A VIRUS!");

// an esier approach.----------------------------- no semi-collins

// do{
//     var creditnum= window.prompt("YOUR COMPUTER HAS A VIRUS! ENTER YUOUR CREDIT CARD INFO... OR ELSE!");
// }while(creditnum=="");
// console.log("THANK YOU! YOUR COMPUTER NO  LONGER HAS A VIRUS!");


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  For loops &&&&&&&&&&&&&&&&&&&&&&&&&&&
// for(let i=0; i<10; i++){
//     console.log(i);
// }

// for(let i=10; i>0; i--){
//     console.log(i);
// }
// console.log("Happy New Year!");

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  For in loop^^^^^^^^^^^^^^^^^^^^^^^
// var list=["MY","Gosh","Yogya","likes","Denzel"]

// for(let i=0; i<list.length; i++){
//     console.log(list[i])
// }

// for(let i in list){
//     console.log(list[i]);
// }

// var car={
//     brand:"Honda",
//     year: 2021,
//     owner:"Billy",
//     city:"Burnaby",
//     colour:"orange"
// };

// for(let property in car){
//     console.log(cars[property]);
// }


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%% Nested loop$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var userinput= window.prompt("Enter a symbol!");
// var rows= window.prompt("Enter number of rows!");
// var columns=window.prompt("Enter number of columns!");

// for(let i=0; i<rows; i++){
//     for(let j=0; j<columns; j++){
//         document.getElementById("mysymbol").innerHTML+= userinput;

//     }
//     document.getElementById("mysymbol").innerHTML +="<br>";
// }

// do{
//     var creditcard=window.prompt("YOUR COMPUTER HAS A VIRUS, PLEASE ENETRE YOUR CREDIT CARD NUMBER OR ELSE!");
// }while(creditcard=="")

// document.getElementById("yournumber").innerHTML += creditcard;


// var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// for(let i=0; i<letters.length; i++){
//     for(let j=0; j<letters.length; j++){
//         document.getElementById("mygrid").innerHTML += letters[j] +=" ";
//     }
//     document.getElementById("mygrid").innerHTML +="<br>";
//     letters= letters.slice(1) + letters.charAt(0)
// }

// var G= 6.67*10**-11
// // function velocity(r, M){
// //     return (G*M/r)**1/2; 
// // };

// // console.log(velocity(6.38*10**6, 5.98*10**24));

// function periodofearth(r, M){
//     return ((4*3.14159265358**2*r**3)/(G*M))**1/2/(60*60*24*365)
// };

// console.log(periodofearth(1.5*10**11, 1.99*10**30));


// ********************************* Math Methods ***********************
// var myNum;
// myNum= Math.PI;
// myNum= Math.round(3.5);
// myNum= Math.floor(3.9);
// myNum= Math.ceil(3.01);
// myNum= Math.E;
// myNum= Math.max(1,2,3,4,5,6,7,8,9);
// myNum= Math.min(1,2,3,3,45,65);
// myNum= Math.pow(3,3);
// myNum= Math.sqrt(196);
// console.log(myNum);

// var a = window.prompt("Enter side A:");
// var b= window.prompt("Enter side B:");
// function pythagoros(){
//     return Math.sqrt(Math.pow(a,2)+ Math.pow(b,2))
// };

// console.log("The hypotenus of the triangle is "+ pythagoros());


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& random method&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// var ranNum;
// ranNum= Math.random();
// ranNum= Math.random()*6
// ranNum= Math.floor(Math.random()*6)+
// console.log(ranNum);

// function returnran(min, max){
//     return Math.floor(Math.random()*(max-min) +min)
// };

// console.log(returnran(2,6));

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& date object &&&&&&&&&&&&&&&&&&&&&&&&&&&&
// date= new Date(0);
// date= new Date();
// date= new Date(2032, 2, 23, 19, 7, 7, 7);
// date= new Date("March 23, 2023 19:7:7:7")
// console.log(date);

// let year= date.getFullYear();
// let month= date.getMonth();
// let dayofweek= date.getDay();
// let dayofmonth= date.getDate();
// let hours= date.getHours();
// let minutes= date.getMinutes();
// let seconds= date.getSeconds();
// let milliseconds= date.getMilliseconds()

// console.log(year);
// console.log(month);
// console.log(dayofweek);
// console.log(dayofmonth);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
// console.log(milliseconds);

// date.setFullYear(2035);
// date.setMonth(11);
// date.setDate(25);
// date.setHours(0);
// date.setMinutes(0);
// date.setSeconds(1);
// date.setMilliseconds(1);
// console.log(date);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& string methods $$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// var myName= "Bro Code"
// var mystreet= "1234 Happy Street"
// var city= "YunNan China 123456"
// var myphone="123-456-789"

// console.log(myName.length);
// console.log(myName.charAt(2));
// console.log(myName.indexOf("o"));
// console.log(myName.lastIndexOf("o"));
// myName="Bro Code"
// console.log(myName.trim());
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName.slice(0,3));
// console.log(myName.slice(0,myName.indexOf(" ")));
// var lastname= myName.slice(4)
// var name2= myName.substr(0,4) //works the same as slice;
// console.log(lastname);

// var myadress= mystreet.concat(" ", city)
// console.log(myadress);
// var myofficial= myphone.replace("-","");
// console.log(myofficial);
// var myformal= myphone.replaceAll("-","")
// console.log(myformal);

//parseInt("345") //parseInt are used to convert numbers in a string to actual numbers; it ignores all the numbers after a non numeric term(ex. "13+13" will return only the previous"13")

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Method Chaining &&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// let user="billy"
// let firstletter= user.charAt(0);
// firstletter= firstletter.toUpperCase();
// user= firstletter + user.slice(1);
// console.log(user);

// user= user.charAt(0).toUpperCase(0)+ user.slice(1);
// console.log(user);

// %%%%%%%%%%%%%%%%%%%%%%%%%% break continue %%%%%%%%%%%%%%%%%

// for(let i=1; i<=20; i++){
//     if(i==13){
//         break;
//     };
//     console.log(i);
// };

// for (let i=1; i<=20; i++){
//     if(i==13){
//         continue
//     };
//     console.log(i)
// };


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ var vs let @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* let is blocked in a scope where as var is in a universal scope throughout the entire code unless it's build
in a function*/
// function returning(){
//     for(var i=1; i<=3; i++){
//         console.log(i);
//     };
//     console.log(i);
// };

// for(let i=1; i<=3; i++){
//     console.log(i);
// };
// console.log(i);
// returning()

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Array. For Each Method &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// let total=0;
// let cart=[2,3,7,9,4]

// function checkOut(element){
//     total+= element;
// }

// cart.forEach(checkOut);
// console.log(total);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Map method in array***************************************

// let todollars=[2,7,54,9,4,3];

// function toEuro(value){
//     value*=0.85
//     return value
// }

// let euros= todollars.map(toEuro);
// console.log(euros);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Filter method in array %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// let students=[16,17,18,19,20];

// function checkage(age){
//     if(age>=18){
//         return age;
//     }
// }

// let adultstudents= students.filter(checkage);
// console.log(adultstudents);


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% reduce method (Reduce the array to a single string)%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let strin= ["H","E","L","P"]
let str= [1,2,3,5,,7,5,7,3,43,6,87,6,3,7,35,7,7,37]
function reduction(accumulator, value, index, array){
    return accumulator+ String(value);
}

let finalarray= strin.reduce(reduction);
console.log(finalarray);
let finalarra= str.reduce(reduction);
console.log(finalarra);


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%% cAll backs&&&&&&&&&&&&&&&&&&&&&&&&&&&
// function displayConsole(output){
//     console.log(output);
// }

// function displayDom(output){
//     document.getElementById("mydom").innerHTML += output;
// }

// function myMessage(text, callbacks){
//     message= text;
//     callbacks(message);
// }

// myMessage("Hello, World! I'm Tracey turtle!", displayDom);


// &&&&&&&&&&&&&&&&&&&&&&&&&&&& Function Expression %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5

// ************
// fucntion declaration
// ************
let greeting1= "Hello! Wordls!"
output1(greeting1);

function output1(gre){
    console.log(gre);
};


//******************* */
// fucntion expression
//**************** */
let greeting= function(){console.log("Hello! Worlds!")}

output(greeting);
function output(fun){
    fun()
};

//%%%%%%%%%%%%%%%%%%%%%%%% Nested Function %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function login(username, userinbox){

//     function displayUserName(){
//         console.log("Hello,", username);
//     }

//     function displayUserInbox(){
//         console.log("You have", userinbox, "in total!");
//     }

//     displayUserName();
//     displayUserInbox();
// }

// login("Bro", 0);


// &&&&&&&&&&&&&&&&&&&&&&& Anonymous Functions %%%%%%%%%%%%%%%%%%%%%%%%%%%
// (function(){
//     document.getElementById("myH1").innerHTML += /*or + */"hey!";
// })(); /* can only be used once, immediately run*/

// setTimeout(function(){
//     document.getElementById("myH1").innerHTML = "sup"
// }, 1000/* milliseconds*/);

// setTimeOut has to be used after an anonymous fucntion's defined.

let timeId= setInterval(()=> console.log('tick'),2000);

setTimeout(()=> {clearInterval(timeId); console.log("stop");}, 6000);


// &&&&&&&&&&&&&&&&&&&&&&&&& closures(save nnumbers every time it runs) in js ^&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
let score= function(){
    points=0;
    return function(){
        return points+=1;
        // return points;
    }
}();

// var points1= 0;
// let score1= function(){
//     points1+=1;
//     return points1;
// }

console.log(score());
console.log(score());
console.log(score());

// ############################## examples of closures
function makeSize(size){
    return function(){
        document.body.style.fontSize= size+ "px";
    }
}

let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@ Arrow Funciton (SHORT CUT for funciton expression) @@@@@@@@@@@@@@@@@@@@@@@@@@@@
let hello;

hello= function(x,y){
    console.log(x);
    console.log(y);
};

hello("yo","Bro");
//#
hello = (x,y) => {
    console.log(x);
    console.log(y);
}; 

hello("yo", "bro");
 //#
let students=[16,17,18,19,20];

function checkage(age){
    if(age>=18){
        return age;
    }
}

// let adultstudents= students.filter(checkage);
// console.log(adultstudents);
//#

let adultstudents= students.filter(age => age>= 18);
console.log(adultstudents);


// %%%%%%%%%%%%%%%%%%%%%%%%%%% Numeric Sorting ^^^&&&&&&&&&&&&&&&&&&&&&&&

let array= [3,4,1,2,14,5]
// array.sort();
// console.log(array);// not sorting from least to the largest but similar to alpebetically;
//  |
//  v

/* method one */
// array.sort(function(x,y){
//     return x-y;/*(ascending order)==== "y-x"(descending order)*/
// });

// console.log(array);

/* method 2*/

// array.sort((x,y)=> x-y);
// console.log(array);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Class objects %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class Car{
//     drive(){
//         console.log("You are driving in the positive direction speeding up!");
//     }
//     brake(){
//         console.log("You are coving on the brakes to slow down the vehicle.");
//     }
// }

// creating a new car with the same property !!!!

// let car1= new Car();
// let car2= new Car();
// let car3= new Car();
// let car4= new Car();

// car1.drive();
// car2.brake();


// *&&&&&&&&&&&&&&&&&&&&&&&&&&&& Constructors (this. object is the same thing as assigning an element, or condition etc)&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
// class Car{
//     constructor(make, model, year, color){
//         this.make /* name */= make/* property*/;
//         this.model= model;
//         this.year= year;
//         this.blue= color;

//     }

//     drive(){
//         console.log("You are driving in the positive direction speeding up!");
//     }
//     brake(){
//         console.log("You are coving on the brakes to slow down the vehicle.");
//     }
// }


// let carA= new Car("Japan","Honda", 1990, "orange");
// console.log(carA.blue);
// let carB= new Car("China","RedFlag",2001, "Red");
// console.log(carB.blue);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ key word @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// class Car{
//     constructor(make, model, year, color){
//         this.make /* name */= make/* property*/;
//         this.model= model;
//         this.year= year;
//         this.blue= color;

//     }

//     drive(){
//         console.log("You are driving in the positive direction speeding up!", this.make);
//     }
//     brake(){
//         console.log("You are coving on the brakes to slow down the vehicle.",this.blue);
//     }
// }

// let carA= new Car("Japan","Honda", 1990, "orange");
// carA.drive();
// carA.brake();

// ################################ Static Keyword (property used in class objects only)############################

// class Car{

//     static numberOfCars= 0;

//     static beginRace(){
//         console.log("The race has begun!");
//     }

//     constructor(model){
//         this.model= model;
//         Car.numberOfCars+= 1;
//     }

// }

// let car1= new Car("Honda");
// let car2= new Car("Challenger");
// console.log(Car.numberOfCars);
// Car.beginRace();  // only work for the general car class
// // car1.beginRace(); // staci elements are not assigned to new cars.

// console.log(Math.ceil(Math.PI));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ INheritance (code reuseibility)###########################


// class Animal{
//     constructor(){
//         this.alive = true;

//     }
//     eat(){
//         console.log("This animal is eating!");
//     }

// }

// class Rabbit extends Animal{// extends is the inheritance funciton
//     run(){
//         console.log("This rabbit is running.");
//     }

// }

// class Fish extends Animal {
//     swim(){
//         console.log("This fish is swimming");
//     }

// }
// class Hawk extends Fish {
//     fly(){
//         console.log("This hawk is flying!");
//     }
// }

// let rabbit= new Rabbit();
// let fish= new Fish();
// let hawk = new Hawk();

// hawk.eat();
// console.log(fish.alive)
// rabbit.run();
// hawk.fly();
// fish.swim();


// Method Overriding +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// class Vehicle{
//     drive(){
//         console.log("You drive the vehicle.");
//     }
// }

// class Car extends Vehicle{
//     drive(){
//         console.log("You drive the car.");
//     }

// }

// class Racecar extends Car{
//     drive(){
//         console.log("You drive the racecar!!!!!!!!!!!!!!"); /// inherits the closest class
//     }
// }

// let car = new Racecar();
// car.drive();


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Super Keyword #####################################

// class Person{
//     constructor(name,age){
//         this.age= age;
//         this.name= name;
//     }
//     intro(){
//         console.log("I'm", this.name);
//         console.log("Your age is", this.age);
//     }
// }

// class Student extends Person{
//     constructor(name, age, gpa){
//         super(name,age);
//         this.gpa= gpa;
//     }
//     hello(){
//         super.intro();
//         console.log("Your gpa is", this.gpa);
//     }
// }

// class Teacher extends Person{
//     constructor(name, age, classSize){
//         super(name, age); // super is the parent class
//         this.classSize= classSize;
//     }
//     welcome(){
//         super.intro();
//         console.log("Your classSize is", this.classSize);
//     }
// }

// let student= new Student("William", "16","2.0");
// let teacher = new Teacher("Bob", "45" ,"29");

// console.log(student.age);
// console.log(student.name);
// console.log(student.gpa);

// console.log(teacher.age);
// console.log(teacher.name);
// console.log(teacher.classSize);

// student.hello();
// teacher.welcome();


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Objects as arguments $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// class Car{
//     constructor(model,color){
//         this.model= model;
//         this.color= color;
//     }
// }

// function changeColor(car, newColor){
//     car.color= newColor;
// }

// let car1= new Car("Corvette","blue");
// let car2= new Car("Honda","orange");

// changeColor(car1, "purple");

// console.log(car1.model, car1.color);
// console.log(car2.color, car2.model);

// ############################  arrays as objects $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// class Car{
//     constructor(model, color){
//         this.model = model;
//         this.color= color;
//     }
//     drive(){
//         console.log("You are driving the", this.model);

//     }
// }

// let garage= [];

// let car1= new Car("Corvette","orange")
// let car2= new Car("Honda","red")
// let car3= new Car("Challenger","yellow");

// garage= [car1,car2,car3];

// // console.log(garage[0].model);
// // console.log(garage[1].color);
// // console.log(garage[2].model,garage[2].color);
// for(let i=0; i< garage.length; i++ ){
//     garage[i].drive();

// }

// ############################# Array of functions %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function jump(){
//     console.log("You jump!");
// }

// function punch(){
//     console.log("You punch!");
// }

// function kick(){
//     console.log("You kick!");
// }

// function block(){
//     console.log("YOU block!");
// }

// let action =[];

// action= [jump, punch, kick, block];
// // for(let i=0; i< action.length; i++){
// //     action[i]();
// // }

// action.forEach(func=> func());

// @@@@@@@@@@@@@@@@@@@@@@@@@@@getters and setters ###########################################
// class User{
//     constructor(first, last){
//         this.first= first;
//         this.last= last;
//     }
//     set first(value){
//         this.firstname= value.toUpperCase();
//     }

//     set last(value){
//         this.lastname= value.toLowerCase();
//     }

//     get fullname(){
//         return this.firstname +" "+ this.lastname;
//     }
// };

// let user1= new User("Haha","Kang");
// let user2= new User("Jihyo","Seong");

// console.log(user1.fullname);
// console.log(user2.fullname);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% template literals&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

let firstname ="bro";
let lastname= "code";
let price= "10";
let taxrate= "0.05";
let total;

// console.log("Hello",firstname, lastname); generic method
console.log(`Hello ${firstname} ${lastname}`); // surrounded by `` with ${};
console.log(`the price is $${price}`);
console.log(`the tax rate is ${taxrate}`);
console.log(`The tax is ${price* taxrate}`);
console.log(`the total is $$(total= (price+ price*eaxrate))`);


// ###################################### Add HTML elemts %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// const h1= document.createElement("h3"); // the bject in the elemtn parenthesis has to be elements in HTML.
// h1.innerHTML= "<u>Hello, this is me!</u>";// giving the text into the hs tags
// document.body.append(h1);// add the new created h3 string in the body of html.

const h1= document.createElement("h1");
const underline= document.createElement("u");
underline.innerText= "Hello, this is me!";
h1.append(underline);
document.body.append(h1);

const h2= document.createElement("h2");
const italic= document.createElement("i");
italic.innerText= "What is up!";
h2.append(italic);
document.body.append(h2);

const p= document.createElement("p");
const bold= document.createElement("b");
bold.innerText= "his is Tracey turtle!";
p.append(bold);
document.body.append(p);

// *************************************** modify HTMl elements^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//Go to my HTML files

document.querySelector("#myButton").onclick= function(){
    const h1= document.querySelector("#MyH1"); //by is use "#"
    const underline= document.createElement("u");
    underline.innerText= "Bye, My world!"
    h1.innerText= "";
    h1.append(underline);

    const p= document.querySelectorAll(".Myp");//  the class works like an array , use "." for class!
    // p[0].innerText= "Hah hahahaha  !"
    p.forEach(element=> element.innerText="Hhhhhahahhaha!");

    const button= document.querySelector("button"); // can select tags as well and remove the first object when multpile ones exist!
    button.remove();
}

// ######################################## HCnage CSS property #####################################

document.querySelector("#myButton2").onclick= function(){
    const h1me= document.querySelector("#haha");
    h1me.style.color="#00FF00";
    h1me.style.backgroundColor="black";
    h1me.style.border="4px solid";
    h1me.style.textAlign="center";
    h1me.style.borderColor="blue";
    h1me.style.fontFamily="consolas"

}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Mouse Events (addeventListener)#########################################

const div= document.querySelector("#myDiv");
div.style.backgroundColor="grey";
div.style.width="200px";
div.style.height="200px";
// the property + function in brackets

// div.addEventListener("click",e=>{    
//     console.log("You clicked the square!");
//     div.style.backgroundColor= "yellow";
// })

div.addEventListener("mousedown",e=>{    
    console.log("You are holding the moused down!");
    div.style.backgroundColor= "red";
})

div.addEventListener("mouseup",e=>{    
    console.log("You have released the mouse!");
    div.style.backgroundColor= "grey";
})

div.addEventListener("dblclick",e=>{    
    console.log("You double clicked the square!");
    div.style.backgroundColor= "purple";
})

div.addEventListener("contextmenu",e=>{    
    console.log("You just opened the contextmenu!");
})

div.addEventListener("mouseover",()=>{    
    console.log("You entered the square!");
    div.style.backgroundColor= "orange";
})

div.addEventListener("mouseleave",e=>{    
    console.log("You left the square!");
    div.style.backgroundColor= "grey";
})

// div.addEventListener("mousemove",e=>{    
//     console.log("you moved the mouse!");

// })

// a function looking for the lcm (Least Common Multiple) 
// function lcm(n1,n2){
//     let num=0;
//     let remain1;
//     let remain2;
    
//     do{
//     num++;
//     remain1= num% n1;
//     remain2= num% n2;
    
//     } while(remain1!==0|| remain2!==0);
    
//     return num;
//     }




// @^%$%*&()*&^%^@342444444455@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// tutroial from other videos;


// 1. escape property in a string;
let str1= "Hello \"This is me\", hah hah!" // the \ will clarify the (before )quotation marks.
console.log(str1);

// 2. shift and pop
array=["hah","giao","Jihyo"];
let shifting= array.shift();// this removes the first element of the string and save it into a new variable.
let opoping= array.pop(); // this removes the last element of the string and save it into a new variable.
array.push("hahh");
array.pop();

// 3.global keyword:
// function thisisExample(){
//     global="Hi";// in browser, if global wasn't defined by var, then it automatically become a globle vvariable  which can be used in other functions. However, it is strictly enforced in some system such as Visual studio code.
//     console.log(global);
// }

// function example2(){
//     let him="Jack";
//     console.log(global+ him);
// }

// example2();

//4. JSON.stringify:
array1=[1,2,3,4,5,6]
console.log(JSON.stringify(array1));

//5 turnary operator:  [condition ? statement-if-true: statement-if-false]
//ex1
function checkequals(a,b){
    return a===b ? true: false;
}
//ex2
function checkSign(a){
    return a>0 ? "positive": a<0 ? "negative": "zero";
}
console.log(checkSign(-2));

// 6.defalut parameter:
function yo(n1, n2=1){
    return n1+n2;
}

console.log(yo(1)); // since one value is missing, therefore the default value of n2 is automatically taken.

//7. arguments & rest functions:
function sum(...args){
    return args.reduce((a,b)=> a+b);
}
console.log(sum(1,2,3,4,5,6,7,8)) // bascially args are arguments, it works like an array.

//8. Spread Operator:
list=[1,2,3,4,5];
list1= list;  // ==> list1= [...list] this make sure list1 and list are two separate list which they don't alter the same time;
list[0]=0;  // this line modifies both of the lists, instead of only <list>.
console.log(list1); 

//9. destructuring  (a faser way of assigning variables to object values)
//ex1
const temperature={
    max: 80,
    min: 50
}
let {max: todaymax}= temperature; // this line fo code is the same thing as assigning the value of "max" property from the object 'temperature' to a new variable 'todaymax'. 
console.log(todaymax);

//ex2
const FORECAST= {
    today: {max: 85, min:40},
    tomorrow: {max: 79, min:50}
}

function getMaxTomorrowTemp(forecast){
    let {today:{max: temp}}= forecast;
    console.log(temp);
}

getMaxTomorrowTemp(FORECAST);

//10. Destructring of arrays:
const arrayx= [1,2,3,4,5];
let [x,y,,z]= arrayx; // this skips 3 in the array;
console.log(x,y,z);


// let [ , , ...arrayx]= arrayz; // the two commas before represent skipping the previous two elements.
// console.log(arrayz);

// 11. New function (another way of createing a function)

// let sum1= new Function('a','b','return a+b')
// alert(sum1(1,2));

let arr=[1,2,3];
let arr1= [1,2,3,4,5];

arr= [...arr, ...arr1];
console.log(arr);

// 12.bind method : prevent to lose a value in an object.
let user={
    firstname: "John"
};

function find(){

    console.log(this.firstname);
}

let funcUser= find.bind(user);
funcUser();

// 13. prototypes
// new method:
let pet={
    eats: true
};

let dog= Object.create(pet);
Object.setPrototypeOf(dog,{jumps: true});
console.log(dog.eats);
console.log(Object.getPrototypeOf(dog)===pet);


// 14. ######################### try and catch*************************************

try{
    console.log("I'm attempting to print this message!");
} catch(err){
    console.log("There is an error!");
}

// 15+++++++++++++++++++++++++++++++++= split an join method)))))))))))))))))))))))))))))))))
listwhatever= "How are you";

let splitee= listwhatever.split(",");
console.log(splitee);// split method splits a string into an array

listwhat=[1,2,3,4,5];
let join1= listwhat.join("-");// if thers's nothing in the parenthsis, then the elements in the array will be separated by commas, else, separated by the interim elements.
console.log(join1);