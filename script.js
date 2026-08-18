const recipeContainer = document.getElementById("recipeContainer");

const recipes = [
    {
        name: "Chicken Biryani",
        category: "Indian",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600",
        description: "A delicious and flavorful Indian rice dish."
    },
    {
        name: "Pasta",
        category: "Italian",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
        description: "Creamy and tasty Italian pasta."
    },
    {
        name: "Pizza",
        category: "Italian",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600",
        description: "Classic cheesy pizza with delicious toppings."
    },
    {
        name: "Burger",
        category: "Fast Food",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
        description: "Juicy burger with fresh vegetables and cheese."
    },
    {
        name: "Pancakes",
        category: "Breakfast",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
        description: "Soft and fluffy pancakes for breakfast."
    },
    {
        name: "Fried Rice",
        category: "Asian",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
        description: "Tasty fried rice with vegetables."
    }
];

function displayRecipes(list) {

    recipeContainer.innerHTML = "";

    if (list.length === 0) {
        recipeContainer.innerHTML =
            '<p class="message">No recipes found 😢</p>';
        return;
    }

    list.forEach(recipe => {

        const card = document.createElement("div");

        card.className = "recipe-card";

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">

            <div class="recipe-info">
                <h2>${recipe.name}</h2>
                <p>${recipe.category}</p>
                <p>${recipe.description}</p>
                <button onclick="showRecipe('${recipe.name}')">
                    View Recipe
                </button>
            </div>
        `;

        recipeContainer.appendChild(card);
    });
}

function searchRecipes() {

    const search =
        document.getElementById("searchInput").value.toLowerCase();

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(search) ||
        recipe.category.toLowerCase().includes(search)
    );

    displayRecipes(filteredRecipes);
}

function showRecipe(name) {

    const recipe = recipes.find(item => item.name === name);

    alert(
        `${recipe.name}\n\n` +
        `Category: ${recipe.category}\n\n` +
        `${recipe.description}\n\n` +
        `Enjoy your delicious meal! 🍽️`
    );
}

displayRecipes(recipes);