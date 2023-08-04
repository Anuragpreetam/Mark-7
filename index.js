/*use fetch to get to the api and get the translated text*/
/*https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json*/
var url = "https://api.funtranslations.com/translate/minion.json"
var true_text = document.getElementById("text-field")
var translated_text = document.getElementById("text-field-translated")

/*url builder*/
function urlBuilder(text){
    var url_with_customtext = url +"?"+ "text"+"=" + text;
    //console.log(url_with_customtext)
    return url_with_customtext;
}

/*function to talk to server */
function talktoServer(){
    fetch(urlBuilder(true_text.value))
    .then(response => response.json())
    .then(json=> {
        translated_text.innerHTML=json.contents.translated
    })
    .catch(errorHandler)
}

function errorHandler(){
    alert("something's wrong try again after sometime")
    console.log("Sorry, please try after sometime")
}