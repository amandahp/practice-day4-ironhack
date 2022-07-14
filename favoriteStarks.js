const characterName = prompt('Favorite Game of Thrones main character:');
let house = '';

switch (characterName) {
  case 'Khal Drogo':
    house = 'Dothraki Horselord';
    break;
  case 'Daenerys':
    house = 'Targaryen';
    break;
  case 'Jon Snow':
  case 'Sansa':
  case 'Arya':
    house = 'Stark';
    break;
  case "Tyrion":
  case "Jaime":
  case "Cersei":
    house = "Lannister";
    break;
  default:
    house = "other"   
}

console.log(`Your favorite character is from the house ${house}.`);
