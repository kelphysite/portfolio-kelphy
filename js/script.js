// Navigation scroll effect
const navbar = document.getElementById("navbar");
let lastScrolled = window.scrollY > 100;

// Fungsi untuk menambah class transition setelah interaksi scroll pertama
function enableNavbarTransition() {
  navbar.classList.add("navbar-animate");
  window.removeEventListener("scroll", enableNavbarTransitionOnFirstScroll);
}
function enableNavbarTransitionOnFirstScroll() {
  enableNavbarTransition();
}
if (window.scrollY <= 100) {
  // Jika posisi di atas, tunggu scroll pertama untuk aktifkan animasi
  window.addEventListener("scroll", enableNavbarTransitionOnFirstScroll);
} else {
  // Jika sudah di bawah threshold saat load, langsung aktifkan animasi
  navbar.classList.add("navbar-animate");
}

// Efek scroll pada navbar
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("show");

  // Change icon based on menu state
  if (mobileMenu.classList.contains("show")) {
    menuBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("show");
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Portfolio filtering
document.querySelectorAll(".portfolio-filter").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document.querySelectorAll(".portfolio-filter").forEach((btn) => {
      btn.classList.remove("active-filter");
    });

    // Add active class to clicked button
    this.classList.add("active-filter");

    const category = this.getAttribute("data-category");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach((item) => {
      if (
        category === "all" ||
        item.getAttribute("data-category") === category
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animasi button kirim pesan
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn-animated");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          button.classList.add("animate-btn");
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(button);
});
