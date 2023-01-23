function generateText() {
  // list of alphabet characters (both upper and lowercase)
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // variable to store the generated text
  let text = ""
  // variable to keep track of the number of groups before adding a full stop
  let groupsBeforeStop = Math.floor(Math.random() * 5) + 3
  // variable to check if it's the first character of a group
  let isFirstChar = true
  // Get the number of characters from the input box
  let numCharacters = document.getElementById("characters").value
  // variable to keep track of the total number of characters generated so far
  let charactersGenerated = 0

  // loop to generate random groups of characters
  while (charactersGenerated < numCharacters) {
    // variable to store the current group of characters
    let group = ""
    // loop to generate random characters within the group
    let groupLength = Math.min(
      Math.floor(Math.random() * 5) + 1,
      numCharacters - charactersGenerated
    )
    for (let j = 0; j < groupLength; j++) {
      if (isFirstChar) {
        group += alphabet[Math.floor(Math.random() * 26) + 26]
        isFirstChar = false
      } else {
        group += alphabet[Math.floor(Math.random() * 26)]
      }
    }

    text += group
    charactersGenerated += groupLength
    groupsBeforeStop--

    // add a full stop after every 3-7 groups of characters
    if (groupsBeforeStop === 0) {
      text += ". "
      groupsBeforeStop = Math.floor(Math.random() * 5) + 3
      isFirstChar = true
    } else if (charactersGenerated < numCharacters) {
      text += " "
    }
  }

  // output the generated text in a div
  document.getElementById("output").innerHTML = text += "."
}

function setFontSize() {
  // Get the font size from the input field
  let fontSize = document.getElementById("font-size").value
  // Set the font size of the entire page
  document.getElementById("output").style.fontSize = fontSize + "px"
}
