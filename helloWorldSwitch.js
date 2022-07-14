function HelloWorld(){
  let language 
  const nameUser = prompt("What's your name?")

  console.log(`Hello ${nameUser}.`)

  const choiceLanguage = prompt(`Choose a language (FR/French | EN/English | IT/Italian | PT/Portuguese):`).toLowerCase()

  switch(choiceLanguage){
    case "fr":
    case "french":
      language = "Bonjuor tout le monde!";
      break;
    case "en":
    case "english":
      language = "Hello World!";
      break;
    case "it":
    case "italian":
      language = "Ciao mondo";
      break;
    case "pt":
    case "portuguese":
      language = "Olá Mundo!";
      break;
    default:
      language = "Invalid Language"
  }

  console.log(language)

}

HelloWorld()