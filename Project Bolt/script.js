function myFunction() {
    var x = document.getElementById("myPsw").value;
    
    if (x === "koushik") {
    
    document.write("sucess");
    off();
} else {
   document.write("wrong password");
   on();
}
}
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
window.onload = on();