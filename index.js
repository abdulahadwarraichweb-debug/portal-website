const today = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('dateDisplay').textContent = today.toLocaleDateString('en-US', options);
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page reload

  // Show success message
  const successMessage = document.getElementById("successMessage");
  successMessage.classList.remove("hidden");

  // Optional: Auto-hide after 3 seconds
  setTimeout(() => {
    successMessage.classList.add("hidden");
    document.getElementById("registrationForm").reset();
  }, 3000);
});

