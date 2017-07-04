// Code goes here




var person = {
  Name : "Ziv Knobler",
  Height : 173,
  eyeColor : "brown"
};

person.eyeColor = "blue";
console.log(person);


var country = {
    isIsrael : true,
    city : "beith-dagan"
  };
  
person.location = country;
console.log(person.location);


var languages = {
  isHebrew : true,
  isEnglish : false,
  isRussian : false
  
};

person.language = languages;

console.log(person.language);