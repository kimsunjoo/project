$(document).reday(function(){

  var text = document.getElementById("typeStyle");

  var typewriter = new Typewriter(text, {
      loop: true
  });

  typewriter.typeString('안녕하세요')
      .pauseFor(2000)
      .deleteAll()
      .typeString('두루두루 잘 하는 디자이너')
      .pauseFor(2000)
      .deleteChars(2)
      .typeString('<strong>김선주 입니다.</strong>')
      .pauseFor(2500)
      .start();





// Get the modal
var modal = document.getElementById(".modal1-1");

// Get the button that opens the modal
var btn = document.getElementById(".workboxIn > p");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName(".closebtn")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
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
});