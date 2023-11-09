const tabArray = ['About', 'Menu', 'Contact'];

function initialPage() {
  const content = document.getElementById('content');

  // Create Header and Navigation Bar content
  const navBar = document.createElement('div');
  navBar.setAttribute('id', 'nav-bar');

  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.textContent = 'Bambino';

  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const tabList = document.createElement('ul');
  for (let i=0; i<tabArray.length; i++) {
    const listElement = document.createElement('li');
    listElement.classList.add('selection');
    listElement.textContent = tabArray[i];
    listElement.setAttribute('id', tabArray[i].toLowerCase());
    tabList.appendChild(listElement);
  }

  // Create Main Body content
  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');

  const information = document.createElement('div');
  information.classList.add('information');
  information.setAttribute('id', 'intro');

  const greeting = document.createElement('h1');
  greeting.classList.add('greeting');
  greeting.textContent = 'Welcome to paradise';

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 'Food cooked with passion and fervour';

  // Append elements into content 
  tabs.appendChild(tabList);

  navBar.appendChild(logo);
  navBar.appendChild(tabs);

  information.appendChild(greeting);
  information.appendChild(description);

  mainContent.appendChild(information);

  content.appendChild(navBar);
  content.appendChild(mainContent);
}

function initialPageContent () {
  const information = document.querySelector('.information');

  const greeting = document.createElement('h1');
  greeting.classList.add('greeting');
  greeting.textContent = 'Welcome to paradise';

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 'Food cooked with passion and fervour';

  information.appendChild(greeting);
  information.appendChild(description);
}

export { initialPage, initialPageContent };