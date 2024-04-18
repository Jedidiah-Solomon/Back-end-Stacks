import message from "./message.js";
import { message_2 } from "./message.js";
import { multiplicationApp } from "./person.js";
import { displayResult } from "./calculator.js";




document.getElementById("demo").innerHTML = message() + ' ' + message_2();
document.getElementById("demo2").innerHTML = multiplicationApp(4, 3);