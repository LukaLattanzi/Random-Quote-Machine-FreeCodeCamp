const quoteElement = document.getElementById("quote");
const mark1Element = document.getElementById("mark-1");
const mark2Element = document.getElementById("mark-2");
const authorElement = document.getElementById("author");
const videogameElement = document.getElementById("videogame");
const button = document.getElementById("button");

const dataBase = [
  [
    "Remember, no russian.",
    "- Vladimir Makarov",
    "Call Of Duty: Modern Warfare 2",
    "#1E1E1E",
  ], // frase 1
  [
    "Did I ever tell you the definition of insanity?",
    "- Vaas Montenegro",
    "Far Cry 3",
    "#1A8E9B",
  ], // frase 2
  [
    "All we had to do was follow the damn train, CJ!",
    "- Big Smoke",
    "GTA: San Andreas",
    "#34495E",
  ], // frase 3
  [
    "I raised you, and loved you, I've given you weapons, taught you techniques, endowed you with knowledge. There's nothing more for me to give you. All that's left for you to take is my life.",
    "- The Boss",
    "Metal Gear Solid 3: Snake Eater",
    "#006400",
  ], // frase 4
  [
    "War. War never changes. But men do, through the roads they walk.",
    "- Ulysses",
    "Fallout: New Vegas",
    "#8B4513",
  ], // frase 5
  [
    "Boss... you were right. It's not about changing the world. It's about doing our best to leave the world... the way it is. It's about respecting the will of others, and believing in your own.",
    "- Big Boss",
    "Metal Gear Solid 4: Guns of the Patriots",
    "#2F4F4F",
  ], // frase 6
  [
    "The courage to walk into the Darkness, but strength to return to the Light.",
    "- Parables of the Allspring",
    "Destiny",
    "#191970",
  ], // frase 7
  [
    "It's easy to forget what a sin is in the middle of a battlefield.",
    "- Solid Snake",
    "Metal Gear Solid",
    "#292929",
  ], // frase 8
  [
    "The right man in the wrong place can make all the difference in the world.",
    "G-Man",
    "Half-Life 2",
    "#2E3137",
  ], // frase 9
  [
    "Do not mistake my silence for lack of grief.",
    "- Kratos",
    "God of War",
    "#800000",
  ], // frase 10
];

let previousIndex = null;
let currentIndex = null;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUniqueRandomIndex() {
  do {
    currentIndex = getRandomNumber(0, dataBase.length - 1);
  } while (currentIndex === previousIndex);

  previousIndex = currentIndex;
  return currentIndex;
}

function generateRandomQuote() {
  const randomIndex = generateUniqueRandomIndex();
  quoteElement.textContent = dataBase[randomIndex][0];
  authorElement.textContent = dataBase[randomIndex][1];
  videogameElement.textContent = dataBase[randomIndex][2];
  const bgColor = dataBase[randomIndex][3];
  document.body.style.backgroundColor = bgColor;
  quoteElement.style.color = bgColor;
  mark1Element.style.color = bgColor;
  mark2Element.style.color = bgColor;
  authorElement.style.color = bgColor;
  videogameElement.style.color = bgColor;
  button.style.backgroundColor = bgColor;
}

button.addEventListener("click", generateRandomQuote);
generateRandomQuote();
