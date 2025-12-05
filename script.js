// Simple Intersection Observer for Fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) =>
{
    entries.forEach(entry =>
    {
        if (entry.isIntersecting)
        {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el =>
{
    observer.observe(el);
});

// Typing Effect Logic
const textToType = "Secure by Design.";
const typeElement = document.getElementById('typing-text');
let typeIndex = 0;

function typeWriter()
{
    if (typeIndex < textToType.length)
    {
        typeElement.textContent += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 100); // Adjust speed here (lower is faster)
    }
}

// Start typing after initial fade-in (approx 800ms delay)
setTimeout(typeWriter, 800);