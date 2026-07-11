function welcome(){

alert("🍔 Welcome to ByteBites!\nEnjoy your meal 😊");

}

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