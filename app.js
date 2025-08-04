const form = document.getElementById('signupForm');
const successMsg = document.getElementById('successMsg');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  successMsg.style.display = 'block';
  form.reset();
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 2500);

});
