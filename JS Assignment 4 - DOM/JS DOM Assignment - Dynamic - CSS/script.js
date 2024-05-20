document.getElementById('colorchange').addEventListener('click', function() {
    const colorbox = document.getElementById('colorbox');
    const textContainer = document.getElementById('text-container');
    textContainer.style.color = colorbox.value;
  });
  
  document.getElementById('fontsize').addEventListener('input', function() {
    const fontsize = document.getElementById('fontsize').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontSize = fontsize + 'px';
  });
  
  document.getElementById('italic').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
  });
  
  document.getElementById('underline').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
  });
  
  document.getElementById('bold').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
  });
  
  document.getElementById('list').addEventListener('change', function() {
    const fontType = document.getElementById('list').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontFamily = fontType;
  });
  
  document.getElementById('getstyle').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    const cssProps = document.getElementById('css-props');
    cssProps.textContent = `Font Size: ${textContainer.style.fontSize}, Color: ${textContainer.style.color}, Font Family: ${textContainer.style.fontFamily}, Font Style: ${textContainer.style.fontStyle}, Font Weight: ${textContainer.style.fontWeight}, Text Decoration: ${textContainer.style.textDecoration}`;
  });
  