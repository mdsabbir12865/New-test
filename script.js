
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener("click", function(e) {
    var target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelector(".contact-btn")?.addEventListener("click", function() {
  alert("Thanks! We will contact you soon.");
});
