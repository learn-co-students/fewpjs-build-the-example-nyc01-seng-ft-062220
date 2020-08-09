// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector(`#modal`)
const errorMessage = errorModal.querySelector(`p`)
const removeErrorModal = () => {
  errorModal.classList.add(`hidden`)
}

document.addEventListener(`click`, e => {
  if (e.target.matches(`.like-glyph`)) {
    mimicServerCall()
      .then(() => {
        if (e.target.innerText === EMPTY_HEART) {
          e.target.classList.add(`activated-heart`)
          e.target.innerText = FULL_HEART
        } else {
          e.target.classList.remove(`activated-heart`)
          e.target.innerText = EMPTY_HEART
        }
      })
      .catch(error => {
        errorMessage.innerText = error 
        errorModal.classList.remove(`hidden`)
        setTimeout(removeErrorModal, 5000)
      })
  }
})



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
