/*
document.write("<h2 style='color: blue;'>JavaScript Rules!</h2>");
document.write("<hr>");
//alert("<hr>");

var phrase = "Wajahat";
document.write(phrase);
phrase = "Muhammad";
document.write(phrase);

//Variable DataTypes
var age = 26;
var gpa = 3.1;
var isMale = false;
var flaws = null;
var description = undefined;

//Strings

var str = "This is Temporary String";
document.write("<hr>"+str+"<br>");
document.write(str.length);
document.write("<br>"+str.toUpperCase());
document.write("<br>"+str.toLowerCase());
document.write("<br>"+str.charAt(2));
document.write("<br>"+str.indexOf("T"));
document.write("<br>"+str.lastIndexOf("T"));
document.write("<br>"+str.substring(0,5));
document.write("<br>"+str.substring(str.indexOf("e"),str.length));
document.write("<br>"+str.endsWith("String"));
document.write("<br>"+str.includes("String"));

//Math & Numbers

document.write("<br>");
document.write(2 + (4 * 8));
var num = -9;
document.write("<br>"+Math.abs(num));
document.write("<br>"+Math.max(num,4));
document.write("<br>"+Math.min(num,6));
document.write("<br>"+Math.round(6.7));
document.write("<br>"+Math.pow(3,3));
document.write("<br>"+Math.sqrt(33));
document.write("<br>"+Math.round(Math.random()* 10));

//User Input

var name = window.prompt("What's your name?");
var age = window.prompt("How old are you?");
document.write("<br>" +"Hey " + name + ", How are you today. Do you like being " + age + " years old?");

//Basic Calculator

var num1 = window.prompt("Enter a number");
var num2 = window.prompt("Enter another number");
num1 = parseInt(num1);
num2 = parseInt(num2);
document.write(num1 + num2);

//Array

var fruits = "Apples, Oranges, Peaches";
fruits[0] = "Mangoes";
fruits = fruits.split(",");
document.write(fruits[1]);


//Function

function sayHi(age){
  var name = "Muhammad";
  document.write("<h1>Hello Wajahat " + name);
  document.write("<p>You are " + age);
  alert("Hey");
}
sayHi(26);


function addition(num1,num2){
  return num1 + num2;
}
var addedNumbers = addition(45,54);
document.write(addedNumbers);


//Accessing HTMl Elements

var header = document.getElementById('header');
header.innerHTML = "Overridden";
header.style.color = "red";
header.style.backgroundColor = "blue";

var link = document.getElementById('link');
link.href = "https://www.facebook.com";

//Event Listeners

function handleClick(element){
  element.innerHTML = 'Clicked';
  element.style.backgroundColor = 'blue';
}

var image = document.getElementById('image');
image.addEventListener("mouseover",function(){
  this.style = "box-shadow: 2px 2px 2px grey";
  this.width = "150";
});

image.addEventListener("mouseout",function(){
  this.style = "";
  this.width = "100";
});

//Building a Message App

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function() {
  var newMessage = document.createElement("li");
  newMessage.innerHTML = textbox.value;
  messages.appendChild(newMessage);
  textbox.value = "";
});

//If Statements

var isMale = true;
var isTall = true;

if(isMale && isTall){
  document.write("You are a tall male");
}
else if (isMale && !isTall) {
  document.write("You are a short male");
}
else {
  document.write("You are either not tall or not male");
}

//Comparisons

function max(num1, num2, num3){
  if(num1 >= num2 && num1 >= num3){
    return num1;
  }
  else if (num2 >= num1 && num2 >= num3) {
    return num2;
  }
  else {
    return num3;
  }
}
document.write(max(3,4,5));
*/
