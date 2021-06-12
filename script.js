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
