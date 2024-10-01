// Accelerate the redirection
function accelerateRedirection() {
    const progress = document.querySelector('.loading-progress');
    progress.style.animationDuration = '3s';

    // Show an explosion effect on completion (here, just a log for simulation)
    setTimeout(() => {
        alert('Boom! Redirecting...');
        window.location.href = 'https://example.com'; // Replace with your target URL
    }, 3000);
}

// Add asteroid interaction for mouse hover
document.querySelectorAll('.asteroid').forEach(asteroid => {
    asteroid.addEventListener('mouseover', function() {
        this.style.animationDuration = '5s';  // Speed up when hovered
    });
    asteroid.addEventListener('mouseout', function() {
        this.style.animationDuration = '15s'; // Return to normal speed
    });
});
