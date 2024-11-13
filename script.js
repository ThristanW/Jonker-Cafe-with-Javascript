// making the navigation bar sticky
// getting the navigation bar element
const navbar = document.querySelector('.navbar');

// function
function stickyNavbar() {
    if(window.scrollY > navbar.offsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// adding scroll event listener
window.addEventListener('scroll', stickyNavbar);


// Collapsible FAQ
const faqButtons = document.querySelectorAll('.faq-question');

// Loop through each button and add an event listener to toggle the answer visibility
faqButtons.forEach(button => {
    button.addEventListener('click', function() {        
        const answer = this.nextElementSibling;
        
        //making it so that if another FAQ section is opened, all the other FAQ sections close 
        if (answer.style.display === "block") {
            answer.style.display = "none"; 
        } else {
            answer.style.display = "block"; 
        }
    });
});


// Countdown timer (Some elements are not working for some reason)
// Setting the countdown date
const countdownDate = new Date("December 31, 2024 23:59:59").getTime();

// Updating the countdown per second
const timerInterval = setInterval(function() {
    // Current time and date
    const now = new Date().getTime();

    // Time remaining
    const distance = countdownDate - now;

    // Time remaining in days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Displaying the values in different sections
    document.getElementById("days-value").innerHTML = formatTime(days);
    document.getElementById("hours-value").innerHTML = formatTime(hours);
    document.getElementById("minutes-value").innerHTML = formatTime(minutes);
    document.getElementById("seconds-value").innerHTML = formatTime(seconds);

    // When the countdown is over, this message will be shown
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "<h3>Event has ended!</h3>";
    }
}, 1000);




