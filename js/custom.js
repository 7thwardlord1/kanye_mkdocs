document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-md-color-scheme', 'slate');
    } else {
        document.documentElement.setAttribute('data-md-color-scheme', 'default');
    }

    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0';
    progressBar.style.height = '5px';
    progressBar.style.backgroundColor = '#ff0000';
    progressBar.style.zIndex = '1000';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const percentage = (window.scrollY / maxScroll) * 100;
        progressBar.style.width = percentage + '%';
    });

    const trackTitle = document.querySelector('h1').innerText;
    const header = document.querySelector('.md-header');

    switch (trackTitle) {
        case 'Dark Fantasy':
            header.style.backgroundColor = '#1c1c1c';
            break;
        case 'Gorgeous':
            header.style.backgroundColor = '#2c2c2c';
            break;
        case 'Power':
            header.style.backgroundColor = '#3c3c3c';
            break;
        default:
            header.style.backgroundColor = '#e30e3c';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('mbtdf-theme');
});
