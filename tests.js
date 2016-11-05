// Made by Darin Croft
function start(){
  //sets cookies so results will be incorrect if you skip everythng
    setCookie("a1", 0);
    setCookie("a2", 0);
    setCookie("a3", 0);
}
function question1(){
  var answer = document.getElementById("input").value;
  //var tmp = typeof answer;
  //if(typeof(answer) == 'string'){
    answer = answer.toLowerCase();
    if(answer == "x"){
      document.getElementById("feedback").innerHTML = '<span style:"color: green">Correct! Hit Next Question to move on.</span>';
      setCookie("a1", 1);
    }
    else {
      document.getElementById("feedback").innerHTML = '<span style:"color: red">That is incorrect. Try again!</span>';
      setCookie("a1", 0);
    }
//  }
  //else{
  //  document.getElementById("feedback").innerHTML = '<span style:"color: red">That is incorrect. The answer should be a letter!</span>';
//  }
}

function question2(){
  var answer;
  answer = document.getElementById("input").value;
  //var tmp = typeof answer;
  //if(tmp == "number"){
    if(answer == "123"){
      document.getElementById("feedback").innerHTML = '<span style:"color: green">Correct! Hit Next Question to move on.</span>';
      setCookie("a2", 1);
    }
    else {
      document.getElementById("feedback").innerHTML = '<span style:"color: red">That is incorrect. Try again!</span>';
      setCookie("a2", 0);
    }
//  }
  //else{
//    document.getElementById("feedback").innerHTML = '<span style:"color: red">That is incorrect. The answer should be a number!</span>';
//  }
}

function question3(){
  var answer;
  answer = document.getElementById("input").value;
  answer = answer.toLowerCase();
  if(answer == "gi"){
    document.getElementById("feedback").innerHTML = '<span style:"color: green">Correct! Hit Next Question to move on.</span>';
    setCookie("a3", 1);
  }
  else {
    document.getElementById("feedback").innerHTML = '<span style:"color: red">That is incorrect. Try again!</span>';
    setCookie("a3", 0);
  }
}

function results(){
  var check1 = getCookie("a1");
  var check2 = getCookie("a2");
  var check3 = getCookie("a3");
  var total = check1 + check2 + check3;
  if(check1 == 1){
    document.getElementById("q1").innerHTML = '<p style:"color: green">Correct</p>';
  }
  else{
    document.getElementById("q1").innerHTML = '<p style:"color: red">Incorrect</p>';
  }
  if(check2 == 1){
    document.getElementById("q2").innerHTML = '<p style:"color: green">Correct</p>';
  }
  else{
    document.getElementById("q2").innerHTML = '<p style:"color: red">Incorrect</p>';
  }
  if(check3 == 1){
    document.getElementById("q3").innerHTML = '<p style:"color: green">Correct</p>';
  }
  else{
    document.getElementById("q3").innerHTML = '<p style:"color: red">Incorrect</p>';
  }
  document.getElementById("final").innerHTML = (total/3)*100 + "% correct";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
