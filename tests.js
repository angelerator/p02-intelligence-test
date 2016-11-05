// Made by Darin Croft
function start(){
  //sets cookies so results will be incorrect if you skip everythng
    setCookie(a1, "0");
    setCookie(a2, "0");
    setCookie(a3, "0");
}
function question1(){
  var answer;
  answer = document.getElementById("input").value;
  answer.toLowerCase();
  if(){
    document.getElementById("feedback").innerHTML = '<span style:"color: green">Correct! Hit Next Question to move on.</span>';
    setCookie(a1, "1");
  }
  else {
    document.getElementById("feedback").innerHTML = '<span style:"color: red">That is incorrect. Try again!</span>';
    setCookie(a1, "0");
  }
}

function question2(){
  var answer;
  answer = document.getElementById("input").value;
  answer.toLowerCase();
  if(answer == ""){
    document.getElementById("feedback").innerHTML = '<span style:"color: green">Correct! Hit Next Question to move on.</span>';
    setCookie(a2, "1");
  }
  else {
    document.getElementById("feedback").innerHTML = '<span style:"color: red">That is incorrect. Try again!</span>';
    setCookie(a2, "0");
  }
}

function question3(){
  var answer;
  answer = document.getElementById("input").value;
  answer.toLowerCase();
  if(answer == ""){
    document.getElementById("feedback").innerHTML = '<span style:"color: green">Correct! Hit Next Question to move on.</span>';
    setCookie(a3, "1");
  }
  else {
    document.getElementById("feedback").innerHTML = '<span style:"color: red">That is incorrect. Try again!</span>';
    setCookie(a3, "0");
  }
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
