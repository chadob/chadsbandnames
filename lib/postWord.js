'use strict';
function postWord(a, wordObject) {
  if (wordObject.hasOwnProperty(a)) {
    return {msg: 'We already have your awesome word, ' + a + ', in our list.'};
  }

  wordObject[a] = true;
  console.dir(wordObject);
  return {msg: 'Thanks for submitting ' + a + '!'};
}

module.exports = postWord;
