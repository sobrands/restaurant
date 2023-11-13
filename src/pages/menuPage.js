let pastaNames = ['Spaghetti Carbonara', 'Potato Gnocchi', 'Mafaldine Seafood Alfredo'];
let pastaPrices = [38, 46, 41];
let pastaDescriptions = ["Proscuitto, Bacon, Onions, Cream Sauce", "Crema, Mushroom Ragu, Black Truffle", "Prawns, Scallops, Lobster Butter"];

let pizzaNames = ['Magherita', 'Black Truffle', 'Spinach and Artichoke'];
let pizzaPrices = [32, 35, 33];
let pizzaDescriptions = ["Fresh Mozzarella, Tomato, Basil", "Mix Mushroom, Ricotta, Arugula", "Fresh Mozzarella, Spinach, Black Olive"];

export default function menuPage() {
  const information = document.querySelector('.information');
  information.setAttribute('id', 'menu');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Menu';

  const pastaList = document.createElement('div');
  pastaList.classList.add('food-list');
  
  const pastaTitle = document.createElement('h3');
  pastaTitle.classList.add('food-type');
  pastaTitle.textContent = 'Pasta';

  const pastaDishes = document.createElement('div');
  pastaDishes.classList.add('dishes');

  pastaList.appendChild(pastaTitle);
  pastaList.appendChild(pastaDishes);

  for (let i=0; i<pastaNames.length; i++)
  {
    const dish = document.createElement('div');
    const dishName = document.createElement('p');
    const dishPrice = document.createElement('p');
    const dishDesc = document.createElement('p');

    dish.classList.add('dish');
    dishName.classList.add('dish-name');
    dishPrice.classList.add('dish-price');
    dishDesc.classList.add('dish-desc');

    dishName.textContent = pastaNames[i];
    dishPrice.textContent = pastaPrices[i];
    dishDesc.textContent = pastaDescriptions[i];

    dish.appendChild(dishName);
    dish.appendChild(dishPrice);
    dish.appendChild(dishDesc);
    pastaDishes.appendChild(dish);
  }

  const pizzaList = document.createElement('div');
  pizzaList.classList.add('food-list');
  
  const pizzaTitle = document.createElement('h3');
  pizzaTitle.classList.add('food-type');
  pizzaTitle.textContent = 'Pizza';

  const pizzaDishes = document.createElement('div');
  pizzaDishes.classList.add('dishes');

  pizzaList.appendChild(pizzaTitle);
  pizzaList.appendChild(pizzaDishes);

  for (let i=0; i<pizzaNames.length; i++)
  {
    const dish = document.createElement('div');
    const dishName = document.createElement('p');
    const dishPrice = document.createElement('p');
    const dishDesc = document.createElement('p');

    dish.classList.add('dish');
    dishName.classList.add('dish-name');
    dishPrice.classList.add('dish-price');
    dishDesc.classList.add('dish-desc');

    dishName.textContent = pizzaNames[i];
    dishPrice.textContent = pizzaPrices[i];
    dishDesc.textContent = pizzaDescriptions[i];

    dish.appendChild(dishName);
    dish.appendChild(dishPrice);
    dish.appendChild(dishDesc);
    pizzaDishes.appendChild(dish);
  }

  information.appendChild(title);
  information.appendChild(pastaList);
  information.appendChild(pizzaList);
}