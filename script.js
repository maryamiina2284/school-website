function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar-lists") {
        x.className += " responsive";
    } else {
        x.className = "navbar-lists";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.navbar-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.getElementById(targetId.substring(1));
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                } else {
                    console.error(`Element with id '${targetId.substring(1)}' not found.`);
                }
            } else {
                console.error('No valid href attribute found.');
            }
        });
    });

    // ScrollReveal animations
    if (window.ScrollReveal) {
        ScrollReveal().reveal('.highlight-boxes .box', {
            interval: 200,
            distance: '30px',
            origin: 'bottom',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false
        });

        ScrollReveal().reveal('.event', {
            interval: 200,
            duration: 1000,
            distance: '40px',
            origin: 'bottom',
            easing: 'ease-in-out'
        });
    }
});
