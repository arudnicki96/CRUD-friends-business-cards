"use strict";

//some definition of elements from HTML

const businessCardDiv = document.querySelector(".business-card-div");
const interactiveNameDiv = document.querySelector(".interactive-name-div");
const updateBtn = document.querySelector("#update-data-button");

const updateDiv = document.querySelector("#update-div-id");
let updateName = document.getElementById("name-update");
let updatePhone = document.getElementById("phone-number-update");
let updateEmail = document.getElementById("email-address-update");
let updateJob = document.getElementById("job-update");

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

function insertDiv(person) {
  //
  const dataDiv = document.createElement("div");
  dataDiv.id = person.name;
  dataDiv.classList.add("cards");
  // adding profile picture
  const profilePicture = document.createElement("img");
  profilePicture.src = `img/${person.picture}`;
  profilePicture.style.width = "150px";
  profilePicture.style.height = "150px";

  dataDiv.appendChild(profilePicture);
  const paragraph = document.createElement("p");
  paragraph.id = `paragraph ${person.name}`;
  const paragraphText = `${person.name} 
    ${person.phoneNumber} 
    ${person.emailAdress} 
    ${person.job}`;

  paragraph.textContent = paragraphText;
  dataDiv.appendChild(paragraph);
  businessCardDiv.appendChild(dataDiv);
  console.log(person.name);

  //---------INTERACTIVE DIV-----------
  const interactiveDiv = document.createElement("div");
  const mainName = document.createElement("p");
  mainName.textContent = person.name;
  interactiveDiv.appendChild(mainName);
  interactiveNameDiv.appendChild(interactiveDiv);
  interactiveDiv.addEventListener("click", function () {
    dataDiv.classList.toggle("hidden");
  });

  //---------DELETE BUTTON-----------

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.addEventListener("click", function () {
    dataDiv.remove();
    interactiveDiv.remove();
  });

  //---------MODIFY BUTTON-------
  const modifyBtn = document.createElement("button");
  modifyBtn.textContent = "MODIFY";

  modifyBtn.addEventListener("click", function () {
    updateDiv.classList.remove("hidden");
    updateName.value = person.name;
    updatePhone.value = person.phoneNumber;
    updateEmail.value = person.emailAdress;
    updateJob.value = person.job;
  });
  dataDiv.appendChild(deleteBtn);
  dataDiv.appendChild(modifyBtn);
}

friends.forEach((friend) => insertDiv(friend));

///----------CREATE BUTTON--------------

const btnCreate = document.querySelector("#send-data-button");

btnCreate.addEventListener("click", function () {
  const create_name = document.getElementById("create-name").value;
  console.log(create_name);
  const createPhoneNumber = document.getElementById(
    "create-phone-number"
  ).value;
  console.log(createPhoneNumber);
  const createEmail = document.getElementById("create-email-address").value;
  console.log(createEmail);
  const createJob = document.getElementById("create-job").value;
  console.log(createJob);
  const photoDefault = "img-5.jpg";

  const Noobie = new NewPerson(
    create_name,
    photoDefault,
    createPhoneNumber,
    createEmail,
    createJob
  );
  insertDiv(Noobie);
});

//------UPDATE BUTTON--------
updateBtn.addEventListener("click", function () {
  const idOfBlock = updateName.value;
  const idOfParagraph = `paragraph ${idOfBlock}`;
  document.getElementById(
    idOfParagraph
  ).textContent = `${updateName.value} ${updatePhone.value} ${updateEmail.value} ${updateJob.value}`;
});
