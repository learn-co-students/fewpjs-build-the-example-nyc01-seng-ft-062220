// Defining text characters for the empty and full hearts for you to use later.
document.addEventListener('DOMContentLoaded', e =>{
  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'
  
  //hide error on load
  const errModal = document.querySelector("#modal")
  errModal.hidden = true;

  function clickHandler(){
    document.addEventListener("click", e => {
      if(e.target.matches(".like-glyph")){
          mimicServerCall(e.target)
      }
    })
  }//click handler


  function mimicServerCall(heartClicked){
    fetch('blah')
    .then(resp => resp.json())
    .then(resp => {
        if(heartClicked.innerText === EMPTY_HEART){
          heartClicked.innerText = FULL_HEART
        } else {
          heartClicked.innerText = EMPTY_HEART
        }
      })
    .catch(err => {
      if(err.message){
        errModal.innerText = err.message
        errModal.hidden = false
        setTimeout(hideErrModalToggle, 5000)
      } 
    })
  }


  function hideErrModalToggle(){
    errModal.hidden = true
  }











  clickHandler()
})//DomContentoaded





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
