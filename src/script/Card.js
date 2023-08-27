import PopupWithImage from "./PopupWithImage";

class Card {
  constructor(data, templateName){
    this._name = data.name;
    this._link = data.link;
    this._templateName = templateName;
  }

  _clickLikeButton(){
    this.classList.toggle("cards__like-button-clicked");
  }
  
  _clickDeleteButton(evt){
    evt.target.closest('.cards__item').remove();
  }

  _openPicture(evt){
    const popupImage = new PopupWithImage('.popup-image');
    popupImage.open(evt);
    /*
    setTimeout(() => {
      const page = document.querySelector('.page');
      const popupImage = document.querySelector('.popup-image');
      const displayImage = document.querySelector('.popup__display-image');
      const popupText = document.querySelector('.popup__text');
      popupText.textContent = evt.target.alt;
      displayImage.src = evt.target.src;
      displayImage.alt = evt.target.alt;
      page.classList.add('page__semitransparent');
      popupImage.classList.add('popup__opened');
    }, 250);
    */
  }

  _clickLikeButton(){
    this.classList.toggle("cards__like-button-clicked");
  }
  
  _clickDeleteButton(evt){
    evt.target.closest('.cards__item').remove();
  }

  generateCard(){
    const cardTemplate = document.querySelector('#cards__template').content;
    const newCard = cardTemplate.querySelector(this._templateName).cloneNode(true);
    newCard.querySelector('.cards__picture').src = this._link;
    newCard.querySelector('.cards__picture').alt = this._name;
    newCard.querySelector('.cards__text').textContent = this._name;
    newCard.querySelector('.cards__picture-button').addEventListener("click", this._openPicture);
    newCard.querySelector('.cards__delete-button').addEventListener("click", this._clickDeleteButton);
    newCard.querySelector('.cards__like-button').addEventListener("click", this._clickLikeButton);
    return newCard;
  }
}

export default Card;