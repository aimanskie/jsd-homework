/*
The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for a title (a string), a number of servings, and ingredients (an array of strings).

On separate lines log the recipe information so it looks like this:

Ginger, Apple and Banana Smoothie

Serves: 2

Ingredients:

- 500ml Milk
- 2/3 cups of vanilla protein powder
- 2 tbs rolled oats
- Pinch of cinnamon
- 2 cups of baby spinach leaves
- 2 frozen bananas
- 2 roughly chopped apples
- 1/2 avocado
- 2 tsp fresh ginger
- 6 ice cubes
*/

const recipe = {
    title: "Ginger, Apple and Banana Smoothie",
    serves: 2,
    ingredients: [
        "500ml Milk",
        "2/3 cups of vanilla protein powder",
        "2 tbs rolled oats",
        "Pinch of cinnamon",
        "2 cups of baby spinach leaves",
        "2 roughly chopped apples",
        "1/2 avocado",
        "2 tsp fresh ginger",
        "6 ice cubes"
    ]
}

console.log(recipe.title)
console.log("Serves: " + recipe.serves)
console.log("Ingredients")

for (i=0; i<recipe.ingredients.length; i++){
    console.log("- " + recipe.ingredients[i])
}

// Method 2
// console.log(`${recipe.title}\n\nServes: ${recipe.numberOfServes}\n\nIngredients:\n\n${recipe.ingredients.join('\n')}`)

// Method 3S
// recipe.forEach(e => {
//     let output = `Title\n${e.title}\n\nServes: ${e.serves}\n\n Ingredients:\n${e.ingredients.join("- ")}`;
//     console.log(output)
// });