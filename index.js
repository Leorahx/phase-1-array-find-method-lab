// code your solution here
const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
  //...
];

// function superbowlWin(array) {
//   const foundWin = array.find(function (object) {
//     if (object.result === "W") {
//       return object.year;
//     }
//   });
//   return foundWin.year;
// }

function superbowlWin(array) {
  const winningGame = array.find((game) => game.result === "W");
  return winningGame ? winningGame.year : undefined;
}

console.log(superbowlWin(record));
