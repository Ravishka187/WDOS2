// Donations

let o = document.getElementById("o");


let donbtn = document.getElementById("donbtn");

let span = document.getElementsByClassName("clo")[0];

donbtn.onclick = function() {
  o.style.display = "block";
}

span.onclick = function() {
  o.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == o) {
    o.style.display = "none";
  }
}