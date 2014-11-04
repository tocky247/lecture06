var showAnswer = function(message){
  var output = document.querySelector("#answer");
  output.value = message;
};

var add = function(event){
  var inputA = document.querySelector("#input-a");
  var inputB = document.querySelector("#input-b");
 
  var a = Number(inputA.value);
  var b = Number(inputB.value);
 
  var answer = parseInt(a) / parseInt(b);
 
  console.log("helloWorld: start");
  showAnswer(answer);
  console.log("helloWorld: end");
};
 
var boot = function(event){
  console.log("boot: start");
  var button = document.querySelector("button");
  button.addEventListener("click", add);
  console.log("boot: end");
};
 
window.addEventListener("load", boot);