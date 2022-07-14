// Hello World

function HelloWorld() {
  const nameUser = prompt("What's your name?")

  console.log(`Hello ${nameUser}.`)

  const choiceLanguage = prompt(`Choose a language (FR/French | EN/English | IT/Italian | PT/Portuguese):`).toLowerCase()

  if (choiceLanguage === "fr" || choiceLanguage === "french"){
    return console.log("Bonjuor tout le monde!")
  } else if (choiceLanguage === "en" || choiceLanguage === "english"){
    return console.log("Hello World!")
  } else if (choiceLanguage === "it" || choiceLanguage === "italian"){
    return console.log("Ciao mondo")
  } else if (choiceLanguage === "pt" || choiceLanguage === "portuguese"){
    return console.log("Olá mundo!")
  } else {
    return console.log("Invalid language")
  }

}


HelloWorld()