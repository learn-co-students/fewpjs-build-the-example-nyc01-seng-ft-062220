// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("modal").className = "hidden"
  
  

  document.addEventListener("click",function(e){
      if (e.target.className === "like-glyph")
      { activateHeart(e)}
      else { dislikeHeart(e)}
  })


  function activateHeart(e){
      mimicServerCall()
      .then(() => { 
        e.target.textContent = FULL_HEART
        e.target.className = "activated-heart"
      })
      .catch((errors) => {
        error.querySelector("h2").textContent = errors
        error.className="";
        setTimeout(function(){ error.className ="hidden"}, 5000)

      
      })

    
  }


  function dislikeHeart(e){
    mimicServerCall()
    .then(() => { 
      e.target.textContent = EMPTY_HEART
      e.target.className = ""
    })
    .catch((errors) => {
      error.querySelector("h2").textContent = errors
      error.hidden=false;
      setTimeout(function(){ error.hidden=true}, 5000)

    
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
