// onClick Search Button for Search Meal

const searchMeal = () => {
    const searchValue = document.getElementById('input-Value').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
//searchMeal();
const displayMeals = mealItem => {
    const mealDisplay = document.getElementById('meal-display');
    //mealDisplay.innerHTML='';
    mealItem.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food-item';
        foodDiv.innerHTML = `
        <div onclick = "ingredients('${food.idMeal}')" class="food-details">
        <img src="${food.strMealThumb}" width="200"/>
           <div class="details">
               <h1>${food.strMeal}</h1>
            </div>
    </div>
        
    `;
        mealDisplay.appendChild(foodDiv);

    })

}

// onClick ingredients display

const ingredients = async (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    console.log(url);

    try {
        const res = await fetch(url);
        const data = await res.json();
        displaySelectedFood(data.meals[0]);
    }
    catch (error) {
        ErrorMsg(console.log("Error"))
    }

}

const displaySelectedFood = selectFood => {
    const ingredientsDiv = document.getElementById('food-details');
    ingredientsDiv.innerHTML = ``;
    ingredientsDiv.className = "select-food"
    ingredientsDiv.innerHTML = `
                <div class="col-md-9">
                <h1>${selectFood.strMeal}</h1>
                <img src="${selectFood.strMealThumb}" >
                </div>
                <div class="card-body second-div">
                <h2> ingredients </h2>
                <li>${selectFood.strIngredient1} </i> </li>
                <li>${selectFood.strIngredient2} </i> </li>
                <li>${selectFood.strIngredient3} </i> </li>
                <li>${selectFood.strIngredient4} </i> </li>
                <li>${selectFood.strMeasure1} </i> </li>
                <li>${selectFood.strMeasure2} </i> </li>
                <li>${selectFood.strMeasure3} </i> </li>
                <li>${selectFood.strMeasure4} </i> </li>
          </div>
    `

}
