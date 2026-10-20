
const enterButton = document.getElementById("enter-button");
const returnButton = document.getElementById("return-button");
const revelation = document.getElementById("revelation");
const hero = document.querySelector(".hero");

enterButton.addEventListener("click", () => {
  document.body.classList.add("corrupted");

  enterButton.disabled = true;
  enterButton.querySelector("span").textContent = "CONECTANDO...";

  window.setTimeout(() => {
    hero.classList.add("hidden");
    revelation.classList.remove("hidden");
    document.body.classList.remove("corrupted");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 850);
});

returnButton.addEventListener("click", () => {
  revelation.classList.add("hidden");
  hero.classList.remove("hidden");

  enterButton.disabled = false;
  enterButton.querySelector("span").textContent = "INGREDI";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
