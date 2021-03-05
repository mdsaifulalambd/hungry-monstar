const searchMeal = () =>{
    const searchValue = document.getElementById('input-Value').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals))
}
//searchMeal();
const displayMeals = mealItem =>{
    const mealDisplay = document.getElementById('meal-display');
    //mealDisplay.innerHTML='';
    mealItem.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className='food-item';
        foodDiv.innerHTML=`
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

