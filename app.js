// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20, 
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
let Cheese=document.getElementById("cheese");
if(state.Cheese){
  Cheese.style.display="inherit";
}else{
  Cheese.style.display="none";
}
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let Tomatoes=document.getElementById("tomato");
  if(state.Tomatoes){
    Tomatoes.style.display="inherit";
  }else{
    Tomatoes.style.display="none";
  }
}

function renderOnions() {
  let onions=document.getElementById("onion");
  state.Onions ? onions.style.display="block":onions.style.display="none"
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
let lettuce=document.getElementById("lettuce");
state.Lettuce?lettuce.style.display="block":lettuce.style.display="none";
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese= !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes=!state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions=!state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick=function () {
  state.Lettuce=!state.Lettuce;
  renderAll();
}

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  let pattyBtn=document.querySelector(".btn-patty");
  let cheeseBtn=document.querySelector(".btn-cheese");
  let tomatoBtn=document.querySelector(".btn-tomatoes");
  let onionBtn=document.querySelector(".btn-onions");
  let lettuceBtn=document.querySelector(".btn-lettuce");

  state.Patty ? pattyBtn.classList.add("active"):document.querySelector(".btn-patty").classList.remove("active");
  state.Cheese ? cheeseBtn .classList.add("active"):document.querySelector(".btn-cheese").classList.remove("active");
  state.Tomatoes ? tomatoBtn .classList.add("active"):document.querySelector(".btn-tomatoes").classList.remove("active");
  state.Onions ? onionBtn.classList.add("active"):document.querySelector(".btn-onions").classList.remove("active");
  state.Lettuce ? lettuceBtn.classList.add("active"):document.querySelector(".btn-lettuce").classList.remove("active");
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
 let patty=document.querySelector(".items1");
 let cheese=document.querySelector(".items2");
 let tomato=document.querySelector(".items3");
 let onion=document.querySelector(".items4");
 let lattuce=document.querySelector(".items5");

state.Patty ? patty.style.visibility="visible":patty.style.visibility="hidden";
state.Cheese ? cheese.style.visibility="visible":cheese.style.visibility="hidden";
state.Tomatoes ? tomato.style.visibility="visible":tomato.style.visibility="hidden";
state.Onions ? onion.style.visibility="visible":onion.style.visibility="hidden";
state.Lettuce ? lattuce.style.visibility="visible":lattuce.style.visibility="hidden";
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice(){
  let Baseprice = 2*wholeWheatBun;
  var price = Baseprice+(state.Patty*ingredients.Patty)+
  (state.Cheese*ingredients.Cheese)+
  (state.Tomatoes*ingredients.Tomatoes)+
  (state.Onions*ingredients.Onions)+
  (state.Lettuce*ingredients.Lettuce);
document.querySelector(".price-details").innerHTML='INR'+price;

}
