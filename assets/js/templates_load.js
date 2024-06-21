document.addEventListener('DOMContentLoaded', function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('G-header').innerHTML = data;
        });
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('features.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('features-load').innerHTML = data;
        });
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('services-benefits.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('services-benefits-load').innerHTML = data;
        });
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('courses-benefits.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('courses-benefits-load').innerHTML = data;
        });
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('parallax-counter.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('counter').innerHTML = data;
        });
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('our-team.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('our-team').innerHTML = data;
        });
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-load').innerHTML = data;
        });
});