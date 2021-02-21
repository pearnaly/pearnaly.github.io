(function() {

  'use strict';

  var userLang = navigator.language || navigator.userLanguage || 'en';
  console.log("The language is: " + userLang);
  var lang = userLang.substr(0,2).toLowerCase();

  var supportedLanguages = ['en', 'de', 'it', 'fr'];
  if (supportedLanguages.includes(lang)) {
    var style = document.createElement('style');
    var otherLanguagesSelect = supportedLanguages
      .filter(function(l) {return l !== lang;})
      .map(function(l) {return '.lang-' + l})
      .join(', ')
    style.innerHTML = otherLanguagesSelect + ` {
        display: none;
      }
      .lang-` + lang + ` {
        display: unset;
      }
    `;
    document.head.appendChild(style);
  }

})();
