function welcome(){
alert("🍔 Welcome to ByteBites!\nEnjoy your meal 😊");
}

// SEARCH

const search=document.getElementById("search");

search.addEventListener("keyup",function(){

let value=search.value.toLowerCase();

let cards=document.querySelectorAll(".card");

let found=false;

cards.forEach(function(card){

let food=card.innerText.toLowerCase();

if(food.includes(value)){
card.style.display="block";
found=true;
}
else{
card.style.display="none";
}

});

document.getElementById("noResult").style.display=found?"none":"block";

});

// FILTER

function filterMenu(category){

let cards=document.querySelectorAll(".card");

cards.forEach(function(card){

if(category=="all"){

card.style.display="block";

}

else if(card.classList.contains(category)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

}

// SHOPPING CART

let cart=[];

function addToCart(name,price){

cart.push({name,price});

updateCart();

localStorage.setItem("cart",JSON.stringify(cart));

}

function updateCart(){

let list=document.getElementById("cartItems");

list.innerHTML="";

let total=0;

cart.forEach(function(item){

let li=document.createElement("li");

li.innerHTML=item.name+" - ₹"+item.price;

list.appendChild(li);

total+=item.price;

});

document.getElementById("cartCount").innerHTML=cart.length;

document.getElementById("total").innerHTML=total;

}

function clearCart(){

cart=[];

updateCart();

localStorage.removeItem("cart");

}

// LOAD CART

if(localStorage.getItem("cart")){

cart=JSON.parse(localStorage.getItem("cart"));

updateCart();

}

// FAVOURITES

let hearts=document.querySelectorAll(".favourite");

hearts.forEach(function(heart,index){

if(localStorage.getItem("heart"+index)){

heart.classList.add("active");

}

heart.addEventListener("click",function(){

heart.classList.toggle("active");

if(heart.classList.contains("active")){

localStorage.setItem("heart"+index,true);

}

else{

localStorage.removeItem("heart"+index);

}

});

});
