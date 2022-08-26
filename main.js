//inputs needed
const txtname = document.getElementById("finame");
const mail = document.getElementById("mail");
const phoneno = document.getElementById("phone");
const cat = document.querySelector("#cat");
const typea = document.querySelector("#typea");
const noa =document.getElementById("noa");
const typec = document.querySelector("typec");
const noc = document.getElementById("noc");
const dur = document.getElementById("dur");
const foods = document.getElementById("foods");
const ann = document.getElementById("ann");
const no_a = document.getElementById("no_a");


//outputs given
const temorder = document.getElementById("temorder");
const ord = document.getElementById("ord");


//Buttons
const addOrderBtn = document.getElementById("add_order");
const placeOrderBtn = document.getElementById("place-order");
const addFav = document.getElementById("add_fav");
const orderFav = document.getElementById("ord_fav");
const loy = document.getElementById("loy");
ord_fav

//add to current order
const cur = {
  Activity: "",
  Adult: "",
  Adult_number: 0,
  Child: "",
  child_number: 0,
  Duration: "",
  Extra: "",
  Annual: "",
  Annual_no:0,
  totActivities: 0,
  Price: 0.0
};
//current order
function addprice(){
  const adultlocal = 1000;
  const childlocal  = 500;
  const adultint = 5000;
  const childint = 2500;
  const halfloc = 250;
  const halfint = 500;
  const fullloc = 500;
  const fullint = 1000;
  const foods = 500;
  let ticketa = 0;
  let ticketc = 0;
  let amountdur = 0;
  let foodP = 0;
  let pricea = 0;
  let temtotal = 0.0;

  if (cur.Adult == "Local"){
    ticketa = adultlocal * cur.Adult_number;
  }else{
    ticketa = adultint * cur.Adult_number;
  }
  if (cur.Adult == "Local"){
    ticketc = childlocal * cur.child_number;
  }else{
    ticketa = childint * cur.child_number;
  }


  if (cur.Adult == "Local" && cur.Child == "Local" && cur.Duration == "Half a Day"){
    amountdur = (halfloc * cur.Adult_number) + (halfloc * cur.child_number);
  }else if (cur.Adult == "International" && cur.Child == "International" && cur.Duration == "Half a Day"){
    amountdur = (halfint * cur.Adult_number) + (halfint * cur.child_number);
  }else if (cur.Adult == "Local" && cur.Child == "International" && cur.Duration == "Half a Day"){
    amountdur = (halfloc * cur.Adult_number) + (halfint * cur.child_number);
  }else if (cur.Adult == "International" && cur.Child == "Local" && cur.Duration == "Half a Day"){
    amountdur = (halfint * cur.Adult_number) + (halfloc * cur.child_number);
  }else if (cur.Adult == "Local" && cur.Child == "Local" && cur.Duration == "Full Day"){
    amountdur = (fullloc * cur.Adult_number) + (fullloc * cur.child_number);
  }else if (cur.Adult == "International" && cur.Child == "International" && cur.Duration == "Full Day"){
    amountdur = (fullint * cur.Adult_number) + (fullint * cur.child_number);
  }else if (cur.Adult == "International" && cur.Child == "Local" && cur.Duration == "Full Day"){
    amountdur = (fullint * cur.Adult_number) + (fullloc * cur.child_number);
  }else if (cur.Adult == "Local" && cur.Child == "International" && cur.Duration == "Full Day"){
    amountdur = (fullloc * cur.Adult_number) + (fullint * cur.child_number);
  }else{
    amountdur = 0;
  }  


  foodP = cur.Extra * foods

  
  if (cur.Annual == "Local Annual Pass"){
    pricea = 4500 * cur.Annual_no;
  }else if (cur.Annual == "International Annual Pass"){
    pricea = 15000 * cur.Annual_no;
  }else {
    pricea = 0;
  }


  return temtotal = ticketa + ticketc + amountdur + foodP + pricea;

}

function act(){
  
  cur.Activity = cat.options[cat.selectedIndex].text;
  cur.Adult = typea.options[typea.selectedIndex].text;
  cur.Adult_number = noa.value;
  cur.Child = typea.options[typea.selectedIndex].text;
  cur.child_number = noc.value;
  cur.Annual = ann.options[ann.selectedIndex].text;
  cur.Annual_no = no_a.value;
  cur.Duration = dur.options[dur.selectedIndex].text;
  cur.Extra = foods.value;
  cur.Price = addprice();

  temorder.innerText= 
    "Activity: " + cur.Activity + "\n" +
    "Adults: " + cur.Adult + "\n" +
    "Adult Number: " + cur.Adult_number + "\n" +
    "Children: " + cur.Child + "\n" +
    "Children Number: " + cur.child_number + "\n" +
    "Annual Pass: " + cur.Annual + "\n" +
    "Annual Pass Number: " + cur.Annual_no + "\n" +
    "Duration: " + cur.Duration + "\n" +
    "Food Tokens: " + cur.Extra + "\n" +
    "Price: " + cur.Price

}

// order added to the basket

const bas = {
  Name: "",
  Email: "",
  Phone: "",
  Activity: "",
  Adult: "",
  Adult_number: 0,
  Child: "",
  child_number: 0,
  Duration: "",
  Extra: "",
  Annual: "",
  Annual_no: "",
  TOtal: 0.0,

  loyal: 0
};

//loyalty points
let loyalty = 0;

let firstFav = true;
let first = true;
 

addOrderBtn.onclick = function(){
  loyalty = (parseInt(cur.Adult_number) + parseInt(cur.child_number) + parseInt(cur.Annual_no));
  if(txtname.value == "" || mail.value == "" || phoneno.value == 0){
    alert("Please fill out the required fieds");
  }else if (first){
    //firstFav = false;
    bas.Name = txtname.value;
    bas.Email = mail.value;
    bas.Phone = phoneno.value;
    bas.Activity += cur.Activity;
    bas.Adult += cur.Adult;
    bas.Adult_number += parseInt(cur.Adult_number);
    bas.Child += cur.Child;
    bas.child_number += parseInt(cur.child_number);
    bas.Duration += cur.Duration;
    bas.Extra += cur.Extra;
    bas.Annual += cur.Annual;
    bas.Annual_no += parseInt(cur.Annual_no);
    bas.TOtal += cur.Price;
    first = false;

    temorder.innerText= "No items in the cart"

    ord.innerText = 
    "Name: " + bas.Name + "\n" +
    "Email:" + bas.Email + "\n"+
    "Phone:" + bas.Phone + "\n"+
    "Activity:" + bas.Activity + "\n"+
    "Child_:" + bas.Child + "\n"+
    "Number of children:" + bas.child_number + "\n"+
    "Annual tickets:" + bas.Annual + "\n"+
    "Annual tickets number:" + bas.Annual_no + "\n"+
    "Duration:" + bas.Duration + "\n"+
    "Food tokens:" + bas.Extra + "\n"+
    "Total Price " + bas.TOtal
  }else{
    bas.Name = txtname.value;
    bas.Email = mail.value;
    bas.Phone = phoneno.value;
    bas.Activity += "," + cur.Activity;
    bas.Adult += "," + cur.Adult;
    bas.Adult_number += "," + parseInt(cur.Adult_number);
    bas.Child += "," + cur.Child;
    bas.child_number += "," + parseInt(cur.child_number);
    bas.Duration += "," + cur.Duration;
    bas.Extra += "," + cur.Extra;
    bas.Annual += "," + cur.Annual;
    bas.Annual_no += "," + parseInt(cur.Annual_no);
    bas.TOtal += cur.Price;
    

    temorder.innerText= "No items in the cart"

    ord.innerText = 
    "Name: " + bas.Name + "\n" +
    "Email:" + bas.Email + "\n"+
    "Phone:" + bas.Phone + "\n"+
    "Activity:" + bas.Activity + "\n"+
    "Child_:" + bas.Child + "\n"+
    "Number of children:" + bas.child_number + "\n"+
    "Annual tickets:" + bas.Annual + "\n"+
    "Annual tickets number:" + bas.Annual_no + "\n"+
    "Duration:" + bas.Duration + "\n"+
    "Food tokens:" + bas.Extra + "\n"+
    "Total Price " + bas.TOtal
  }
}
let fav = localStorage.setItem("fav", "false");
let ofav = document.getElementById("add_fav");
ofav.addEventListener('click', function(add_fav){
  add_fav.preventDefault();

  if (txtname.value == "" || mail.value == "" || phoneno.value == 0){
    localStorage.setItem("fav") == true
    alert("No favourites added")  
  }else{

    loyalty = (parseInt(cur.Adult_number) + parseInt(cur.child_number) + parseInt(cur.Annual_no));
        let activity = localStorage.setItem("Activity", cur.Activity);
        let adult = localStorage.setItem("Adult", cur.Adult);
        let adnu = localStorage.setItem("Adult_number", cur.Adult_number);
        let child = localStorage.setItem("Child", cur.Child);
        let chnu = localStorage.setItem("Child_number", cur.child_number);
        let duration = localStorage.setItem("Duration", cur.Duration);
        let food = localStorage.setItem("Extra", cur.Extra);
        let amount = localStorage.setItem("Price", cur.Price);
        let annual = localStorage.setItem("Annual", cur.Annual);
        let an_am = localStorage.setItem("Annual_no", cur.Annual_no);
        alert("Favourites Added")
        
  }
});
let av = document.getElementById("ord_fav");
av.addEventListener('click', function(ord_fav){
  ord_fav.preventDefault();


    if (txtname.value == "" || mail.value == "" || phoneno.value == 0){
        localStorage.getItem("fav") == true
        alert("No favourites added")  
    }else{
      loyalty = (parseInt(cur.Adult_number) + parseInt(cur.child_number) + parseInt(cur.Annual_no));
      let activity = localStorage.getItem("Activity");
      let adult = localStorage.getItem("Adult");
      let adnu = localStorage.getItem("Adult_number");
      let child = localStorage.getItem("Child");
      let chnu = localStorage.getItem("Child_number");
      let duration = localStorage.getItem("Duration");
      let food = localStorage.getItem("Extra");
      let amount = localStorage.getItem("Price");
      let annual = localStorage.getItem("Annual");
      let an_am = localStorage.getItem("Annual_no");

      bas.Name = txtname.value;
      bas.Email = mail.value;
      bas.Phone = phoneno.value;
      bas.Activity += "," + activity;
      bas.Adult += "," + adult;
      bas.Adult_number += "," + parseInt(adnu);
      bas.Child += "," + child;
      bas.child_number += "," + parseInt(chnu);
      bas.Duration += "," + duration;
      bas.Extra += "," + food;
      bas.Annual += "," + annual;
      bas.Annual_no += "," + parseInt(an_am);
      bas.TOtal += amount;
      
      ord.innerText = 
      "Name: " + bas.Name + "\n" +
      "Email:" + bas.Email + "\n"+
      "Phone:" + bas.Phone + "\n"+
      "Activity:" + bas.Activity + "\n"+
      "Child_:" + bas.Child + "\n"+
      "Number of children:" + bas.child_number + "\n"+
      "Annual tickets:" + bas.Annual + "\n"+
      "Annual tickets number:" + bas.Annual_no + "\n"+
      "Duration:" + bas.Duration + "\n"+
      "Food tokens:" + bas.Extra + "\n"+
      "Total Price " + bas.TOtal
    }
    
});

//loyalty calculation
function loyal(){
    if(loyalty > 3){
        let loyal = localStorage.setItem("loy",parseInt(loyalty * 20));
    }else{
        let loyal = localStorage.setItem("loy", 0);
    }
}
let l = document.getElementById("loy");
loy.addEventListener('click', function(loy){
    loy.preventDefault();
    loyal();
    let lo = localStorage.getItem("loy");

    alert("You have currently earned " + lo + " loyalty points for the booked activities.")
});




