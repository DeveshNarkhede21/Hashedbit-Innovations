const modal = document.getElementById('myModal');

const btn = document.getElementById('openModal');

const span = document.getElementsByClassName('close')[0];

const okButton = document.getElementById('okButton');
const cancelButton = document.getElementById('cancelButton');

btn.onclick = function() {
  modal.style.display = 'block';
};

span.onclick = function() {
  modal.style.display = 'none';
};

okButton.onclick = function() {
  modal.style.display = 'none';
  alert('OK button clicked!');
};
 
cancelButton.onclick = function() {
  modal.style.display = 'none';
};
