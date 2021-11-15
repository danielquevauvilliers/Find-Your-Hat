const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const fieldComponent = [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole];

class Field {
  constructor(field) {
    this.field = field;
    this.width = field[0].length;
    this.height = field.length;
    this.playerPosition = [0, 0];
  }
    
  print() {
    this.field.forEach(function(element) {
      console.log(element.join(""));
    })
  }

  static generateField(height, width, percent) {
    const field = [];
    const maxNumberOfHoles = Math.round(width * percent / 100);
    for (let i = 0; i < height; i++) {
      let row = [];
      let element;
      let numberOfHoles = 0;
      for (let j = 0; j < width; j ++) {
        if (i === 0 && j === 0) {
          element = pathCharacter;
        } else {
          element = fieldComponent[Math.round(Math.random() * 4)];
          if (element === hole && numberOfHoles !== maxNumberOfHoles) {
            numberOfHoles++;
          } else {
            element = fieldCharacter;
          }
        }
        row.push(element);
      }
      field.push(row);
    }

    let hatY = 1 + Math.floor(Math.random() * (height - 1));
    let hatX = Math.floor(Math.random() * width);
    
    field[hatY][hatX] = hat;

    return field;
  }
}



function play() {
  
  const myField = new Field(Field.generateField(10, 15, 30));

  console.clear();
  console.log("\nFIND YOUR HAT\n");
  console.log("Use r/l/u/d to move your '*' character to reach your hat '^'\n");
  myField.print();

  let gameOver = false;

  do  {
    let move = prompt('Which way?');

    switch (move) {
      case "r":
      case "R":
        myField.playerPosition[0] += 1;
        break;
      case "l":
      case "L":
        myField.playerPosition[0] -= 1;
        break;
      case "u":
      case "U":
        myField.playerPosition[1] -= 1;
        break;
      case "d":
      case "D":
        myField.playerPosition[1] += 1;
        break;
    }

    let playerX = myField.playerPosition[0];
    let playerY = myField.playerPosition[1];

    if (playerX < 0 || playerX === myField.width || playerY < 0 || playerY === myField.height) {
      gameOver = true;
      console.log("Out of bounds!");
    } else if (myField.field[playerY][playerX] === hole) { 
      gameOver = true;
      console.log("Sorry, you fell down a hole!");
    } else if (myField.field[playerY][playerX] === hat) {
      gameOver = true;
      console.log("You have found your hat!");
    } else {
      myField.field[playerY][playerX] = pathCharacter;
      console.clear();
      console.log("\nFIND YOUR HAT\n");
      console.log("Use r/l/u/d to move your '*' character to reach your hat '^'\n");
      myField.print();
    }
    
  } while (gameOver === false);
}

play();

let replay = true;

while (replay === true) {

  let answer = prompt('Play again?(y/n)');

  if (answer === "y" || answer === "Y") {
    replay = true;
  } else if (answer === "n" || answer === "N") {
    replay = false;
    console.log("Bye");
    break;
  } else {
    console.log("Bad reply!");
    continue;
  }

  play();
}




