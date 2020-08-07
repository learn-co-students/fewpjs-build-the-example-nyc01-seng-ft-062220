// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

hideError()

const clickHandler = () => {
  document.addEventListener('click', (e) => {
    if (e.target.matches(".like-glyph")) {
      const heart = e.target
      toggleLike(heart)
    }
  })
}

function toggleLike(heart) {
  mimicServerCall()
    .then(function(response){
      if (!heart.classList.contains("activated-heart")) {
        heart.innerText = FULL_HEART
        heart.classList.add("activated-heart")
      } else {
        heart.innerText = EMPTY_HEART
        heart.classList.remove("activated-heart")
      }
    })
  .catch(function(error) {
    document.querySelector("#modal > h2").innerText = error
    document.querySelector("#modal").classList.remove("hidden")
    setTimeout(function(){ document.querySelector("#modal").classList.add("hidden") }, 5000);
  })
}

function hideError(){
  document.querySelector("#modal").classList.add("hidden")
}



clickHandler()
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
