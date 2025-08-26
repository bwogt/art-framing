const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.section-title').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.section-content').forEach(el => {
    observer.observe(el);
});