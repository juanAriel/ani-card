const heart = document.getElementById("mainHeart");
let heartInterval = null;

heart.addEventListener("mouseenter", () => {
  if (!heartInterval) {
    heartInterval = setInterval(() => {
      createFloatingHeart();
    }, 200);
  }
});

heart.addEventListener("mouseleave", () => {
  clearInterval(heartInterval);
  heartInterval = null;
});

heart.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      createFloatingHeart();
    }, i * 100);
  }
});

function createFloatingHeart() {
  const container = document.querySelector(".heart-container");
  if (!container) return;

  // ❤️ Corazón izquierdo
  const heartLeft = document.createElement("div");
  heartLeft.classList.add("floating-heart");
  container.appendChild(heartLeft);
  const offsetLeft = Math.random() * 60 - 80;
  const topLeft = 50 + Math.random() * 20;
  heartLeft.style.left = `calc(40% + ${offsetLeft}px)`;
  heartLeft.style.top = `${topLeft}%`;

  // 💙 Corazón derecho
  const heartRight = document.createElement("div");
  heartRight.classList.add("floating-heart");
  container.appendChild(heartRight);
  const offsetRight = Math.random() * 60 + 20;
  const topRight = 50 + Math.random() * 20;
  heartRight.style.left = `calc(60% + ${offsetRight}px)`;
  heartRight.style.top = `${topRight}%`;

  // Borrar ambos
  setTimeout(() => {
    heartLeft.remove();
    heartRight.remove();
  }, 1500);
}
