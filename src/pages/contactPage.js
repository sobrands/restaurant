export default function contactPage() {
  const information = document.querySelector('.information');
  information.setAttribute('id', 'contact');

  const title = document.createElement('h1');
  title.textContent = 'Contact Us';
  title.classList.add('title');

  const address = document.createElement('p');
  address.textContent = 'Address: 854 Never Find Me Rd #-01-04';
  address.classList.add('contact-deets');
  address.setAttribute('id', 'address');

  const number = document.createElement('p');
  number.textContent = 'Number: 918309189209123';
  number.classList.add('contact-deets');
  number.setAttribute('id', 'number');

  const email = document.createElement('p');
  email.textContent = 'Mail: no-no@nonono.com';
  email.classList.add('contact-deets');
  email.setAttribute('id', 'email');

  information.appendChild(title);
  information.appendChild(address);
  information.appendChild(number);
  information.appendChild(email);
}