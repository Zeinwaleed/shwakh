document.querySelector('.surprise-btn').addEventListener('click', function() {
  document.querySelector('.surprise').style.display = 'block'; // Ensure the modal is visible
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.surprise').style.display = 'none'; // Close the modal
});


