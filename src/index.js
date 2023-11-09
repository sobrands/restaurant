import './styles/style.css';
import { clear, clearContent } from './utils/utils';
import { initialPage, initialPageContent } from './pages/initialPage';
import aboutPage from './pages/aboutPage';
import menuPage from './pages/menuPage';
import contactPage from './pages/contactPage';

// Initial Page Load
clear();
initialPage();

// Set Event Listeners for each tab
const tabList = document.querySelector('.tabs ul');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  clearContent(); 
  initialPageContent();
})

tabList.addEventListener('click', e => {
  if (e.target.getAttribute('id') === 'about') {
    clearContent();
    aboutPage();
  }
  else if (e.target.getAttribute('id') === 'menu') {
    clearContent();
    menuPage();
  }
  else if (e.target.getAttribute('id') === 'contact') {
    clearContent();
    contactPage();
  }
});