"use strict";

//some definition of elements from HTML

const businessCardDiv = document.querySelector(".business-card-div");
const interactiveNameDiv = document.querySelector(".interactive-name-div");

// so first thing is to create an object of friends
// function is going to take new person's data and add them automatically to the object of friends

class NewPerson {
  constructor(name, picture, phoneNumber, emailAdress, job) {
    (this.name = name),
      (this.picture = picture),
      (this.phoneNumber = phoneNumber),
      (this.emailAdress = emailAdress),
      (this.job = job);
  }
}

const Maks = new NewPerson(
  "Maks Padalak",
  "img-1.jpg",
  "881454647",
  "mkspadalak@gmail.com",
  "Senior React Developer"
);

const Bobe = new NewPerson(
  "Robert Rudnicki",
  "img-2.jpg",
  "570970915",
  "robertrudnicki@gmail.com",
  "robol"
);

const Antonio = new NewPerson(
  "Antek Padalak",
  "img-3.jpg",
  "603518848",
  "antekpadalak@gmail.com",
  "raper"
);

const Artur = new NewPerson(
  "Artur Rudnicki",
  "img-4.jpg",
  "797952845",
  "8arturrudnicki@gmail.com",
  "JS developer"
);

const friends = [Maks, Bobe, Antonio, Artur];

//Now, in order to get ready for "Create" feature
//Here is a function that will:

//1. Create a link with person name, that when clicked, will show all person details
//2. Create a box with all person details and button 'Hide'

function insertDiv(person) {
  ///////////
  const dataDiv = document.createElement("div");
  dataDiv.id = person.name;
  dataDiv.classList.add("cards");
  /////////////////// adding profile picture
  const profilePicture = document.createElement("img");
  profilePicture.src = `img/${person.picture}`;
  profilePicture.style.width = "150px";
  profilePicture.style.height = "150px";

  dataDiv.appendChild(profilePicture);
  const paragraph = document.createElement("p");
  const paragraphText = `${person.name} 
    ${person.phoneNumber} 
    ${person.emailAdress} 
    ${person.job}`;

  paragraph.textContent = paragraphText;
  dataDiv.appendChild(paragraph);
  businessCardDiv.appendChild(dataDiv);

  const interactiveDiv = document.createElement("div");
  const mainName = document.createElement("p");
  mainName.textContent = person.name;
  interactiveDiv.appendChild(mainName);
  interactiveNameDiv.appendChild(interactiveDiv);
  interactiveDiv.addEventListener("click", function () {
    dataDiv.classList.toggle("hidden");
  });
}

friends.forEach((friend) => insertDiv(friend));
