// 1.Конкатенація рядків:
var film = "Володар Перснів";
var genre = "Фентезі";
var year = 2001;
const result = film + genre + year;
console.log(result);

var message1 = film +  + genre + year;
console.log(result);

var message2 =  ${film} ${genre} ${year};
console.log(result);

var message3 = film.concat(genre, year);
console.log(result);

// 2. Робота з екрануванням символів: Сформуйте рядок з вашим улюбленим висловом, використовуючи різні типи кавичок і включаючи в нього символи нового рядка та табуляції.
var expression = "Як хочеш, щоб \'відносились\' до тебе, \n\t\так і \"відносься\" до людей";    
console.log(expression)