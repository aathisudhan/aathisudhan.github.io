let countdownNumber = 5;
const countdownElement = document.getElementById('countdown');

const countdownInterval = setInterval(() => {
    countdownNumber -= 1;
    countdownElement.textContent = countdownNumber;

    if (countdownNumber === 0) {
        clearInterval(countdownInterval);
        window.location.href = "home.html"; // Redirect to home.html
    }
}, 1000);
