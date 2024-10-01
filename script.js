// Optional JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
    const clouds = document.querySelectorAll('.clouds');

    // Randomize cloud speed slightly for a more natural effect
    clouds.forEach((cloud) => {
        const randomSpeed = Math.random() * 5 + 20; // Between 20s and 25s
        cloud.style.animationDuration = `${randomSpeed}s, 7s`;
    });
});
