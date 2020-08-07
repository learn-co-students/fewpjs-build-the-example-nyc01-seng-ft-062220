// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



function likeClick() {

  document.addEventListener("click", function(event) {

    if (event.target.matches(".like-glyph")) {
      const button = event.target
        if (button.innerText === EMPTY_HEART) {
          mimicServerCall()
          
          button.innerText = FULL_HEART
          button.style.color = "red"
        } else {
          button.innerText = EMPTY_HEART
          button.style.color = ""
        }
    }

  })
}

likeClick()



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
