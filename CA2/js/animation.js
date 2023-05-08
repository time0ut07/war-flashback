// --------------------------Up--------------------------

// Create the observer
var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
      // Add the CSS class that has your animation
      entry.target.classList.add('fade-in-up');
      return;
    }

    // entry.target.classList.remove('fade-in-up');
  })
});

// Observe the element
var element = document.getElementsByClassName('fade-up');

for(var i = 0; i < element.length; i++){
  observer.observe(element[i]);
}

// --------------------------Down--------------------------

var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-down');
      return;
    }
  })
});

var element = document.getElementsByClassName('fade-down');
for(var i = 0; i < element.length; i++){
  observer.observe(element[i]);
}

// --------------------------Left--------------------------

var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-left');
      return;
    }
  })
});

var element = document.getElementsByClassName('fade-left');
for(var i = 0; i < element.length; i++){
  observer.observe(element[i]);
}

// --------------------------Right--------------------------

var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-right');
      return;
    }
  })
});

var element = document.getElementsByClassName('fade-right');
for(var i = 0; i < element.length; i++){
  observer.observe(element[i]);
}
  

// --------------------------Progress bar--------------------------


var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('progress-bar-animation');
      return;
    }
  })
})

var element = document.getElementsByClassName('progress-bar');
for(var i = 0; i < element.length; i++){
  observer.observe(element[i]);
}

// Set the date we're counting down to
var countDownDate = new Date("Apr 6, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("bday-countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("bday-countdown").innerHTML = "Happy Birthday!";
  }
}, 1000);