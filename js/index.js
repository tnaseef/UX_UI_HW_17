console.log("Your index.js file is loaded correctly!");


//SKILL LISTS ACCORDIONS

$(document).ready(function(){ //Empathy
    $("#flipE").click(function(){
      $("#panelE").slideDown("slow");
      $("#vE").animate(
        { deg: 0 },
        {duration: 0, step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
    });
});

$(document).ready(function(){ //Creativity
    $("#flipC").click(function(){
      $("#panelC").slideDown("slow");
      $("#vC").animate(
        { deg: 0 },
        {duration: 0, step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
    });
});

$(document).ready(function(){ //Tools
    $("#flipT").click(function(){
      $("#panelT").slideDown("slow");
      $("#vT").animate(
        { deg: 0 },
        {duration: 0, step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
    });
});

$(document).ready(function(){ //Tools
  $("#flipCo").click(function(){
    $("#panelCo").slideDown("slow");
    $("#vCo").animate(
      { deg: 0 },
      {duration: 0, step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
  });
});


//MODAL - pulled from W3 Schools

// Get the modal
var modal = document.getElementById("contactForm");

// Get the button that opens the modal
var btn = document.getElementsByClassName("contactButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the <button> element that closes the modal w the submit button
var submit = document.getElementById("submit");

// When the user clicks on the button, open the modal
btn[0].onclick = function() {
  modal.style.display = "block";
}

btn[1].onclick = function() {
  modal.style.display = "block";
}

btn[2].onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on submit button, close the modal
submit.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
}