import Card from "./card.js";
import PopupWithForms from "./PopupWithForms";

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

const addForm = new PopupWithForms({
  formSelector: '.popup-add', 
  handleFormSubmit: (formData) => {
    // passamos o objeto formData contendo dados do formulário
    // para uma nova instância da classe UserCard
    const card = new Card(formData,
      ".cards__item");
    const cardElement = card.generateCard();
    cardsList.setItem(cardElement);
  }
});
addForm.setEventListeners();

function addCard(card){
  const cardsContainer = document.querySelector('.cards');
  const newCard = new Card({name: card.name, link: card.link}, ".cards__item");
  const cardElement = newCard.generateCard();
  cardsContainer.prepend(cardElement);

}

function openPopupWindow(){
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
  
}


function openAddPopupWindow(){
  addForm.open();
}


function closePopupWindow(){
  popupWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}

function closeAddPopupWindow(){
  popupAddWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}

/*
function closePopupImage(){
  popupImage.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}*/

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

function handleLocationFormSubmit(evt) {
  evt.preventDefault();
  const titleInput = document.querySelector('.popup__location');
  const linkInput = document.querySelector('.popup__link');
  addCard({name: titleInput.value, link: linkInput.value});
  popupAddWindow.classList.remove('popup__opened');
  page.classList.remove('page__semitransparent');
}

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
closeButton.addEventListener("click", closePopupWindow);
closeButtonAdd.addEventListener("click", closeAddPopupWindow);
formElement.addEventListener("submit", handleProfileFormSubmit);
formAddElement.addEventListener("submit", handleLocationFormSubmit);
//closeButtonImage.addEventListener("click", closePopupImage);
document.addEventListener("keydown", closeWindow);