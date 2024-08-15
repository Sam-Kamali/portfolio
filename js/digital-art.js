document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const overlay = document.getElementById('overlay');
    const expandedImg = document.getElementById('expandedImg');
    const closeBtn = document.querySelector('.close-btn');

    // Add click event listeners to each grid item
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('.gallery-img').src;
            expandedImg.src = imgSrc; // Set the source of the expanded image
            overlay.style.display = 'flex'; // Show the overlay
        });
    });

    // Add click event listener to the close button
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none'; // Hide the overlay
    });

    // Add click event listener to the overlay (outside the image) to close it
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) { // Check if the click is on the overlay itself
            overlay.style.display = 'none'; // Hide the overlay
        }
    });
});
