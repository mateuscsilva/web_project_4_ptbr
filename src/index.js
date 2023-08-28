import "./page/index.css";
import "./script/utils.js";
import Card from "./script/card.js";
import FormValidator from "./script/FormValidator.js";
import Section from "./script/Section";
import UserInfo from "./script/UserInfo";

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const page = document.querySelector('.page');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-edit-button');
const closeButtonAdd = document.querySelector('.popup__close-add-button');
const closeButtonImage = document.querySelector('.popup__close-image-button');
const popupWindow = document.querySelector('.popup-edit');
const popupAddWindow = document.querySelector('.popup-add');
const popupImage = document.querySelector('.popup-image');
const formElement = document.querySelector('.popup__form');
const formAddElement = document.querySelector('.popup__form-add');

const cardsContainer = new Section({
  item: initialCards, 
  renderer: (item)=>{
    const newCard = new Card(item, ".cards__item");
    const cardElement = newCard.generateCard();
    cardsContainer.addItem(cardElement);
  }},
  '.cards');
cardsContainer.renderer();


function initalizeFormValidation(){
  const data = {
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "form__input_type_error",
    buttonInactiveClass: "button__inactive",
    errorClass: "form__error_visible",
    inputErrorClassActive: "form__input-error_active"
  } ;
  const editForm = new FormValidator(data,".popup__form-edit")
  editForm.enableValidation();
  const addForm = new FormValidator(data,".popup__form-add")
  addForm.enableValidation();
}

//initializeCards(initialCards);
initalizeFormValidation()

let userInfo = new UserInfo({
  nameSelector: '.profile__name', 
  jobSelector: '.profile__work'
});
