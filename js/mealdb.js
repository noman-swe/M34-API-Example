const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch (url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="..." width="300px">
                <div class="card-body">
                    <h5 class="card-title">Name: ${meal.strMeal}</h5>
                    <p class="card-text">Categoty: ${meal.strCategory}</p>
                    <p class="card-text">Area: ${meal.strArea}</p>
                    <p class="card-text">Instructions: ${meal.strInstructions.slice(0, 180)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}