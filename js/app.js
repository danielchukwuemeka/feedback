var userRating = ""
//get the modal window;
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//dedclare the feedbackRating function
function feedbackRating(rating) {
    userRating = rating.textContent;
    console.log(userRating);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// create the submit function 
function submit() {
    if(userRating != "") {
        var ratedScore = document.getElementById("feedback-message");
        ratedScore.innerHTML = "You selected " + userRating + " Out of 5";
        modal.style.display = "flex";
    } else {
      alert("Please choose a Rating");
    }
    userRating = "";
}

// codes for modal
// Get the modal


