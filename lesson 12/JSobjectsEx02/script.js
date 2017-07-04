// Code goes here




var person = {
  Name : "Ziv Knobler",
  Height : 173,
  EyeColor : "brown"
};

person.EyeColor = "blue";
console.log(person);


var locations = {
    IsIsrael : true,
    city : "beith-dagan"
  };
  
person.location = locations;
console.log(person.location);


var languages = {
  isHebrew : true,
  isEnglish : false,
  isRussian : false
  
};

person.language = languages;

console.log(person.language);