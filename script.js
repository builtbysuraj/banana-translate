let btntranslate = document.querySelector('#translate-button')
let txtInput = document.querySelector('#translate-input')
let outputDiv = document.querySelector('#translate-output')
let serverURL = "https://api.funtranslations.com/translate/minion.json"

const getTranslationURL = (text) => {
  return serverURL + '?' + 'text=' + text
}

//error handling
const errorHandler = (error) => {
  outputDiv.innerText = "error occured " + error
}

const clickHandler = () => {
  let inputText = txtInput.value //taking input

  //calling server for processing
  fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
      let translatedText = json.contents.translated
      outputDiv.innerText = translatedText //showing output
    })
    .catch(errorHandler)
}

btntranslate.addEventListener('click', clickHandler)

/*
just like css selector
('textarea')
('.btn-primary')
('#input-btn')
attribute name selector
('input [name='translator']')
*/