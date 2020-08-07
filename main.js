// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function likeCallback(e) {
  let li = e.target;
  let heart = li.children[0]
  mimicServerCall("bogusUrl")
   //OR: mimicServerCall("bogusUrl", {forceFailure: true})
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
      document.getElementById("modal").className = "";
      setTimeout(function(){ document.querySelector("#modal").classList.add("hidden") }, 5000);
    });
}

const clickHandler = () => {
  let articleHearts = document.querySelectorAll(".like");

  for (let glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
  }
};

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
