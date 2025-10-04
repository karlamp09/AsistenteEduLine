// Animación de texto principal
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero h2");
  heroText.style.opacity = 0;
  heroText.style.transform = "translateY(20px)";
  
  setTimeout(() => {
    heroText.style.transition = "all 1s ease";
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
  }, 300);
});

// Botón para desplazarse a la sección del programa
const programButton = document.getElementById("programButton");
if (programButton) {
  programButton.addEventListener("click", () => {
    document
      .querySelector(".program-section")
      .scrollIntoView({ behavior: "smooth" });
  });
}
