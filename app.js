const form = document.querySelector('#form');
const input = document.querySelector('input[type=text]');
const infoContainer = document.querySelector('.info-container');

const apiKey = `6c25539bdfc74043839103427231212`;



form.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}`)
        .then(response => response.json())
        .then(data => {
            infoContainer.innerHTML = '';
            let htmlContent = '';
            if (data && data.current) {
                htmlContent = `
            <span class="degree">${data.current.temp_c}°C</span>
            <span>${data.current.condition.text}</span>
            <img src="${data.current.condition.icon}" class="img-icon">
            <div class="location-text"><i class="fa-solid fa-location-dot"></i><span> ${data.location.name}, </span><span>${data.location.country}</span></div>
            `;
            } else {
                htmlContent = `<div>No results.</div>`;
            }

            infoContainer.innerHTML = htmlContent;
        })
        .catch(err => console.log(err));
})