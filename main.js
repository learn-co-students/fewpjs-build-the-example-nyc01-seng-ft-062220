// Defining text characters for the empty and full hearts for you to use later.


// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {

  const glyphToggle = (e) => {
    const EMPTY_HEART = '♡'
    const FULL_HEART = '♥'
    const heart = e.target;

    if (!document.getElementById("modal").classList.contains("hidden")) {
      document.getElementById("modal").classList.add("hidden");
    }

    // fake API calls to practice juggling between server action and error handling
    mimicServerCall("ureeel")
    .then(response => {
      console.log(response);
      if (heart.textContent === FULL_HEART || heart.classList.contains("activated-heart")) {
        heartOff();
      } else {
        heartOn();
      }
    })
    .catch(error => {
      console.log(error);
      document.getElementById("modal").classList.remove("hidden");
    })
  
    // helper functions below
    function heartOn() {
      heart.classList.add("activated-heart");
      heart.textContent = FULL_HEART;
      return "on";
    }
    function heartOff() {
      heart.classList.remove("activated-heart");
      heart.textContent = EMPTY_HEART;
      return "off";
    }
  }

  const createLikeEvents = () => {
    const heartGlyphs = document.querySelectorAll(".like-glyph")

    for (const heart of heartGlyphs) {
      heart.addEventListener("click", glyphToggle)
    }
  }

  createLikeEvents();
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
