function clear() {
  const content = document.getElementById('content');
  content.textContent = '';
}

function clearContent() {
  const information = document.querySelector('.information');
  information.textContent = '';
}

export { clear, clearContent };