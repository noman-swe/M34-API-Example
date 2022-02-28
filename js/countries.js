const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countriesList');
    for (const country of countries){
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Country Name: ${country.name.common}</h3>
        <p>City: ${country.capital}</p>
        `

        // const h3 = document.createElement('h3');
        // h3.innerText = `Country Name: ${country.name.common}`;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = `City: ${country.capital}`;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    }
}

