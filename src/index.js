import './styles/style.css';
import initialPage from './pages/initialPage';

function clear() {
  const content = document.getElementById('content');
  content.textContent = '';
}

// Initial Page Load
clear();
initialPage();