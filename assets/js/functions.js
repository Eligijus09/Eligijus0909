document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('scroll-to-top').addEventListener('click', scrollToTop);

let currentTheme = localStorage.getItem('theme') || 'light';
setTheme(currentTheme);

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
}

function showClock() {
    const clockElement = document.getElementById('clock');
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(showClock, 1000);

function submitForm() {
    const resultDiv = document.getElementById('result');
    const form = document.getElementById('contactForm');
    
    const formData = new FormData(form);
    let formIsValid = true;
    
    formData.forEach((value, key) => {
        if (!value) {
            formIsValid = false;
        }
    });

    if (!formIsValid) {
        resultDiv.innerHTML = '<p>Prašome užpildyti visus laukus.</p>';
        return;
    }

    const values = {};
    formData.forEach((value, key) => {
        values[key] = value;
    });

    resultDiv.innerHTML = `
        <h3>Pateikti duomenys:</h3>
        <p><strong>Vardas:</strong> ${values.firstName}</p>
        <p><strong>Pavardė:</strong> ${values.lastName}</p>
        <p><strong>El. Paštas:</strong> ${values.email}</p>
        <p><strong>Telefonas:</strong> ${values.phone}</p>
        <p><strong>Adresas:</strong> ${values.address}</p>
        <p><strong>Klausimas 1:</strong> ${values.question1}</p>
        <p><strong>Klausimas 2:</strong> ${values.question2}</p>
        <p><strong>Klausimas 3:</strong> ${values.question3}</p>
        <p><strong>Klausimas 4:</strong> ${values.question4}</p>
        <p><strong>Klausimas 5:</strong> ${values.question5}</p>
    `;
}

window.addEventListener('scroll', function() {
    const button = document.getElementById('scroll-to-top');
    if (window.scrollY > 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
