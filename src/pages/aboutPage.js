export default function aboutPage() {
  const information = document.querySelector('.information');
  information.setAttribute('id','about');

  // Create Heading
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = "About";
  
  // Create description
  const description = document.createElement('div');
  description.classList.add('description');

  const line1 = document.createElement('p');
  line1.classList.add("line");
  line1.setAttribute('id', 'line1');
  line1.textContent = "From the outside it looks snug, humble and modest. Hardwooden planks and stone beams make up most of the building's outer structure. It's hard to see through the small, stained glass windows, but the excitement from within can be felt outside.";

  const line2 = document.createElement('p');
  line2.classList.add("line");
  line2.setAttribute('id','line2');
  line2.textContent = "As you enter the tavern through the well-crafted, metal door, you're welcomed by aromas of roasted meats and laughing voices. The bartender is quite busy, but still manages to welcome you with a smile.";

  const line3 = document.createElement('p');
  line3.classList.add("line");
  line3.setAttribute('id','line3');
  line3.textContent = "It's as charming inside as it is on the outside. Hardwooden beams support the upper floor and the chandeliers attached to them. The walls are swarmed with flags of all sorts and sizes. Some are from nearby towns or provinces, others from the far corners of the world.";

  description.appendChild(line1);
  description.appendChild(line2);
  description.appendChild(line3);

  information.appendChild(title);
  information.appendChild(description);
}