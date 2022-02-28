const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countriesList');
    for (const country of countries){
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Country Name: ${country.name.common}</h3>
        <p>City: ${country.capital}</p>
         <button onclick="loadCountryByName('${country.name.common}')"> Show details </button>
        `;
        countriesDiv.appendChild(div);
    }
}

const loadCountryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
} 

const displayCountryDetail = country =>{
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `<h4> ${country.name.common} </h4>
    <p>Population: ${country.population}</p>
    <p>region: ${country.region}</p>
    <img src= "${country.flags.png}" width="200px">
    `
} 

