const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content-section');

navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const targetSection = button.dataset.section;

        navButtons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(targetSection).classList.add('active');
    });
});