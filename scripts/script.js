let likeButtons = document.querySelectorAll('.cards__like-button');


function clickLikeButton(){
  this.classList.add("cards__like-button-clicked");
}

for(var i = 0; i < likeButtons.length; i++){
  likeButtons[i].addEventListener("click", clickLikeButton);
}

