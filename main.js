// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

//part one 
//grab the error id 
const tester = document.getElementById("modal")
//going to add a hidden class to this div id
tester.setAttribute("class", "hidden"); 

//part 2 
let articleHearts = document.querySelectorAll(".like-glyph");

//for loop for all articleHears add a eventlistener 
articleHearts.map( glyph => {
  glyph.addEventListener("click", likeCallback);
})

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      document.getElementById("modal").className = "";
    });
}

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
