"use strict";

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
//Here is a function that will

function insertDiv(person) {
  const iDiv = document.createElement("div");
  iDiv.id = person.name;
  const paragraph = document.createElement("p");
  const paragraphText = `${person.name} 
    ${person.phoneNumber} 
    ${person.emailAdress}
    ${person.job}`;

  paragraph.textContent = paragraphText;
  iDiv.appendChild(paragraph);
  document.body.appendChild(iDiv);
}

insertDiv(Bobe);
insertDiv(Maks);
insertDiv(Antonio);
insertDiv(Artur);
