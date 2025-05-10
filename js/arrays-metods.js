const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (let i = 0; i < friends.length; i += 1) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ",";
  }
}
console.log(string);
const friends2 = ["Mango", "Poly", "Kiwi", "Ajax"];
const string2 = friends2.join(",");
console.log(string2);
const cards = [
  "карточка-1",
  "карточка-2",
  "карточка-3",
  "карточка-4",
  "карточка-5",
];
const cardToRemove = "карточка-3";
const removeIndex = cards.indexOf(cardToRemove);
if (removeIndex !== -1) {
  cards.splice(removeIndex, 1);
}
console.log(cards);
const cards2 = [
  "карточка-1",
  "карточка-2",
  "карточка-3",
  "карточка-4",
  "карточка-5",
];
const cardToInsert = "карточка-6";
const insertIndex = 2;
cards2.splice(insertIndex, 0, cardToInsert);
console.log(cards2);
const cards3 = [
  "карточка-1",
  "карточка-2",
  "карточка-3",
  "карточка-4",
  "карточка-5",
];
const cardToUpdate = "карточка-4";
const updateIndex = cards3.indexOf(cardToUpdate);
if (updateIndex !== -1) {
  cards3.splice(updateIndex, 1, "оновлена карточка-4");
}
console.log(cards3);
