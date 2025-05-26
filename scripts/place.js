fetch('dat/country-info.json')
    .then(response => response.json())
    .then(data => {
        const country = data[0]; //first object in the array
        const container = document.getElementById('country-info');

        container.innerHTML = `
        <p><strong>Name:</strong> ${country.name}</p>
        <p><strong>Area:<strong> ${country.area}</p>
        <p><strong>Population:</strong> ${country.population}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Language:</strong> ${country.language}</p>
        <p><strong>Currency:</strong> ${country.currency}</p>
        <p><strong>Time Zone:</strong> ${country.timeZone}</p>
        <p><strong>Calling Code:</strong> ${country.callingCode}</p>
        <p><strong>Internet TLD:</strong> ${country.internetTld}</p>
        `;
    })

    .catch(error => {
        console.error('Failed to load country data', error);
    });

//  To get the current y
document.getElementById('currentyear').textContent = new Date().getFullYear();

//To set last modified
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;


// Wind Chill Calculation
function calculateWindChill(tempF, speedMph) {
    return (
        35.74 + 0.6215 * tempF -
        35.75 * Math.pow(speedMph, 0.16) +
        0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1);
}

// Static values
const temperature = 25;
const windSpeed = 5;

let windChill = "N/A";
if (temperature <= 50 && windSpeed > 3) {
    windChill = calculateWindChill(temperature, windSpeed) + " °F";
}

document.getElementById("windchill").textContent = windChill;