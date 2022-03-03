const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
// clear data
    searchField.value = '';

       // have to complete
       if(searchText == ''){
        // please write something to display
        const searchErr = document.getElementById('search-err');
        searchErr.innerText = `no results found`;
    }
else{
    // load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    
    const res = await fetch(url);
    const data = await res.json();
    displaySearchResult(data.meals);

    const searchErr = document.getElementById('search-err');
    searchErr.textContent = '';
}
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    
    // clear the search result after new search
    /* searchResult.innerHTML = ''; */
    searchResult.textContent = '';

    if(meals.length == 0){
        // show no result found
    }


    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick ="loadMealDetail(${meal.idMeal})" class="card h-100">
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

const loadMealDetail = async mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0])

}
displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';//clearing the searched single items descriptions
    const div = document.createElement('card');
    div.classList.add('card');
    div.innerHTML = `
            <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="..." width="">
            <div class="card-body">
                <h5 class="card-title">Name: ${meal.strMeal}</h5>
                <p class="card-text">Categoty: ${meal.strCategory}</p>
                <p class="card-text">Area: ${meal.strArea}</p>
                <p class="card-text">Instructions: ${meal.strInstructions.slice(0, 180)}</p>
                <a class=""></a> </br>
                <a href="${meal.strYoutube}" target="_blank" type="button" class="btn btn-primary mt-2">Go Somewhere</a>
                </div>
    `;
    mealDetails.appendChild(div);

}