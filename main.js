// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", e => {

  const likeHeart = () => {
    document.addEventListener("click", e => {
      e.preventDefault()


      if(e.target.matches("li.like")) {

        const likeButton = e.target
        const heartIcon = likeButton.querySelector("span")

        if (heartIcon.textContent === EMPTY_HEART) {
          heartIcon.textContent = FULL_HEART
          heartIcon.className = "activated-heart"
          pushToServer()

        } else {

          heartIcon.textContent = EMPTY_HEART
          heartIcon.className = ""
          pushToServer()

        }

      }

    })

  }

  const pushToServer = () => {

     mimicServerCall()
         .then(() => {})
         .catch(error => processError(error))
  }

  const processError = (error) => {
    console.log(error)

    const errorHeader = document.getElementById("modal")
    errorHeader.className = "hidden"

    if (error === "Random server error. Try again.") {
      errorHeader.className = ""
    } else if (error === "Pretend remote server notified of action!") {
      errorHeader.className = "hidden"
      console.log(errorHeader)
    }
  }

  likeHeart()
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
