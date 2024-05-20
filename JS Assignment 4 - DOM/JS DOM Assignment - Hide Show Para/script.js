function toggleVisibility() {
    const paragraph = document.getElementById('useless-paragraph');
    if (paragraph.style.display === 'none' || paragraph.style.display === '') {
      paragraph.style.display = 'block';
    } else {
      paragraph.style.display = 'none';
    }
  }
  
  document.getElementById('toggleButton').addEventListener('click', toggleVisibility);
  