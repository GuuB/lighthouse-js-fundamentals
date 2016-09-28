var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var r = 0;

while (r < ingredients.length)
{
	console.log(ingredients[r]);
	r++;
}

console.log();

for (var i = 0; i < ingredients.length; i++)
{
	console.log(ingredients[i]);
}

console.log();

for (var e = ingredients.length-1; e >= 0; e--)
{
	console.log(ingredients[e]);
}

console.log();