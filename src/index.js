import "./page/index.css";
//import "./script/utils.js";
import Card from "./script/card.js";
import FormValidator from "./script/FormValidator.js";
import Section from "./script/Section";
import UserInfo from "./script/UserInfo";
import PopupWithForm from "./script/PopupWithForm";

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
  aboutSelector: '.profile__work'
});


const addForm = new PopupWithForm({
  formSelector: '.popup-add', 
  handleFormSubmit: (formData) => {
    const card = new Card(formData,
      ".cards__item");
    const cardElement = card.generateCard();
    cardsContainer.addItem(cardElement);
  }
});
addForm.setEventListeners();

const editForm = new PopupWithForm({
  formSelector: '.popup-edit', 
  handleFormSubmit: (formData) => {
    const name = document.querySelector('.popup__name');
    const about = document.querySelector('.popup__about');
    userInfo.setUserInfo({name: name.value, about: about.value});
    //name.textContent = formData.name;
    //about.textContent = formData.about;
  }
});
editForm.setEventListeners();

/*
function addCard(card){
  const cardsContainer = document.querySelector('.cards');
  const newCard = new Card({name: card.name, link: card.link}, ".cards__item");
  const cardElement = newCard.generateCard();
  cardsContainer.prepend(cardElement);

}
*/

function openPopupWindow(){
  editForm._setInputValues(userInfo.getUserInfo());
  editForm.open();
  /*
  setTimeout(() => {
    page.classList.add('page__semitransparent');
    popupWindow.classList.add('popup__opened');
    const nameInput = document.querySelector('.popup__name');  
    const jobInput = document.querySelector('.popup__about');
    const name = document.querySelector('.profile__name');
    const job = document.querySelector('.profile__work');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
  }, 250);
  */
}


function openAddPopupWindow(){
  addForm.open();
}

/*
function closePopupWindow(){
  popupWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}

function closeAddPopupWindow(){
  popupAddWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}
*/

/*
function closePopupImage(){
  popupImage.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}*/

/*
function handleProfileFormSubmit(evt) { 
  evt.preventDefault();
  const nameInput = document.querySelector('.popup__name');  
  const jobInput = document.querySelector('.popup__about');
  const name = document.querySelector('.profile__name');
  const job = document.querySelector('.profile__work');
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}
*/

/*
function handleLocationFormSubmit(evt) {
  evt.preventDefault();
  const titleInput = document.querySelector('.popup__location');
  const linkInput = document.querySelector('.popup__link');
  addCard({name: titleInput.value, link: linkInput.value});
  popupAddWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}*/

document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(".popup");
  const popupEdit = document.querySelector(".popup-edit")
  const popupAdd = document.querySelector(".popup-add")
  if (!isClosest && popupEdit.classList.contains("popup__opened")) {
    popupEdit.classList.remove("popup__opened");
    page.classList.remove('page__semitransparent');
  }
  if (!isClosest && popupAdd.classList.contains("popup__opened")) {
    popupAdd.classList.remove("popup__opened");
    page.classList.remove('page__semitransparent');
  }
  if (!isClosest && popupImage.classList.contains("popup__opened")){
    //popupImage.classList.remove('popup__opened');
    //page.classList.remove('page__semitransparent');
  }
});

function closeWindow(e){
  if(e.key === "Escape"){
    const popupEdit = document.querySelector(".popup-edit")
    const popupAdd = document.querySelector(".popup-add")
    if(popupEdit.classList.contains("popup__opened")){
      //closePopupWindow();
    }else if(popupAdd.classList.contains("popup__opened")){
     // closeAddPopupWindow();
    }else if(popupImage.classList.contains("popup__opened")){
      //closePopupImage();
    }
  }
}

editButton.addEventListener("click", openPopupWindow);
addButton.addEventListener("click", openAddPopupWindow);
//closeButton.addEventListener("click", closePopupWindow);
//closeButtonAdd.addEventListener("click", closeAddPopupWindow);
//formElement.addEventListener("submit", handleProfileFormSubmit);
//formAddElement.addEventListener("submit", handleLocationFormSubmit);
//closeButtonImage.addEventListener("click", closePopupImage);
document.addEventListener("keydown", closeWindow);