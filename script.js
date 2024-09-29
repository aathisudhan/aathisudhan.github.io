const spaceContainer = document.querySelector('.space-container');

// Create stars dynamically
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + 'vh'; // Random position on y-axis
    star.style.left = Math.random() * 100 + 'vw'; // Random position on x-axis
    star.style.animationDuration = Math.random() * 1.5 + 1 + 's'; // Random twinkle speed
    spaceContainer.appendChild(star);
}
