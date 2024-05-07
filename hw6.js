// 1.Конкатенація рядків:
var film = "Володар Перснів, ";
var genre = "Фентезі, ";
var year = 2001;

var message1 = film + genre + year;
console.log(result);

var message2 =  ${film} ${genre} ${year};
console.log(result);

var message3 = film.concat(genre, year);
console.log(result);

// 2. Робота з екрануванням символів: Сформуйте рядок з вашим улюбленим висловом, використовуючи різні типи кавичок і включаючи в нього символи нового рядка та табуляції.
var expression = "Як хочеш, щоб \"відносились\" до тебе,\n\t\так і \"відносься\" до людей";    
console.log(expression)

// 3. Пошук у рядку: Визначте, на якій позиції знаходиться слово "світло" та "темрява" у вірші, і перевірте, чи зустрічається слово "світло" на початку чи в кінці рядка.
let verse = "Світло кінця тунелю, а за спиною лише темрява";

let positionLight = verse.indexOf("Світло");
let positionDarkness = verse.indexOf("темрява");
console.log(positionLight);
console.log(positionDarkness);

let startsWithLight = verse.startsWith("Світло");
let endsWithLight = verse.endsWith("Світло");
console.log(startsWithLight);
console.log(endsWithLight);

// 4.Зміна регістру та заміна частини рядка:
let phrase = "Сонце світить яскраво";
let result = phrase.toLocaleLowerCase()
console.log(result); // cонце світить яскраво
console.log(phrase);

let phrase = "Сонце світить яскраво";
let newPhrase = phrase.replace("cонце", "місяць");
console.log(newPhrase); // місяць світить яскраво
