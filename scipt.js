// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Create a back-to-top button
    const backToTop = document.createElement('button');
    backToTop.textContent = '↑ Top';
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '20px';
    backToTop.style.right = '20px';
    backToTop.style.display = 'none';
    backToTop.style.padding = '10px';
    backToTop.style.background = '#333';
    backToTop.style.color = '#fff';
    backToTop.style.border = 'none';
    backToTop.style.cursor = 'pointer';
    document.body.appendChild(backToTop);

    // Show button on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
