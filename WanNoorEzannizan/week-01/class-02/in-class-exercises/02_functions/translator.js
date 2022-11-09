/*
The World Translator
Write a function called translator that receives a language (e.g. "fr", "eng" etc.). 
Log out the translated version (e.g. if the language is "eng" - log "Hello World", if the language is "fr" - log "Bonjour le monde" etc.)
*/

function translate(language){
    const translations = {
        eng: "Hello World",
        fr: "Bonjour le Monde"
        // ...
      };

      let msg = "";
      if(language == "eng"){
        msg = console.log(translations.eng);
      } else{
        msg = console.log(translations.fr);
      }
    return msg;
}
translate("fr");