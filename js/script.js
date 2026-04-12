document.addEventListener("DOMContentLoaded", () => {
  const hciBtn = document.getElementById("view-more-hci-projects");
  const hciSection = document.getElementById("more-hci-projects");
  const techBtn = document.getElementById("view-more-tech-projects");
  const techSection = document.getElementById("more-tech-projects");
  const dadJoke = document.getElementById("dad-joke");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (hciBtn && hciSection) {
    hciBtn.addEventListener("click", () => {
      hciSection.classList.toggle("hidden");
      hciBtn.textContent = hciSection.classList.contains("hidden")
        ? "View More Projects"
        : "View Less Projects";
    });
  }

  if (techBtn && techSection) {
    techBtn.addEventListener("click", () => {
      techSection.classList.toggle("hidden");
      techBtn.textContent = techSection.classList.contains("hidden")
        ? "View More Projects"
        : "View Less Projects";
    });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (dadJoke) {
    fetch("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })
      .then((response) => response.json())
      .then((data) => {
        dadJoke.textContent = data.joke;
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        dadJoke.textContent = "Oops! Something went wrong.";
      });
  }

  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
});
