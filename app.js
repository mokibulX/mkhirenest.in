const form = document.getElementById('signupForm');
const successMsg = document.getElementById('successMsg');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  // এখানে AJAX দিয়ে ডেটা পাঠাতে পারেন, চাইলে আপনার ইমেইল ব্যবহার করতে পারেন
  successMsg.style.display = 'block';
  form.reset();
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 2500);
});