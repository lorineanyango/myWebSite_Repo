document.addEventListener("DOMContentLoaded", function () {
  // HOME PAGE: Welcome message fade-in effect
  const homeTitle = document.querySelector(".intro h1");
  if (homeTitle) {
      homeTitle.style.opacity = "0";  // Initially hidden
      setTimeout(() => {
          homeTitle.style.transition = "opacity 2s ease-in-out";
          homeTitle.style.opacity = "1";
      }, 500);
  }

  // HOME PAGE: Button click alert
  const exploreBtn = document.getElementById("exploreBtn");
  if (exploreBtn) {
      exploreBtn.addEventListener("click", function () {
          alert("Thank you for exploring CRL! Stay inspired!");
      });
  }

  // ABOUT PAGE: Read More Toggle
  const readMoreBtn = document.getElementById("readMoreBtn");
  const extraText = document.getElementById("extraText");

  if (readMoreBtn && extraText) {
      readMoreBtn.addEventListener("click", function () {
          if (extraText.style.display === "none" || extraText.style.display === "") {
              extraText.style.display = "block";
              readMoreBtn.textContent = "Read Less";
          } else {
              extraText.style.display = "none";
              readMoreBtn.textContent = "Read More";
          }
      });
  }

  // CONTACT PAGE: Form Validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent actual form submission

          // Get input values
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const subject = document.getElementById("subject").value.trim();
          const message = document.getElementById("message").value.trim();

          // Simple validation check
          if (name === "" || email === "" || subject === "" || message === "") {
              alert("Please fill in all fields before submitting.");
              return;
          }

          // Success Message
          alert("Thank you, " + name + "! Your message has been sent successfully.");
          contactForm.reset(); // Clear form after submission
      });
  }
});
