document.getElementById("mode-toggle").addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("dark-mode");
  
    // Change button text based on mode
    this.textContent = body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
  });
  