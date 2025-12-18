document.addEventListener("scroll", () => {
  document.querySelectorAll(".card:not(.show)").forEach(card => {
    const top = card.getBoundingClientRect().top;
    const visible = window.innerHeight * 0.85;

    if (top < visible) {
      card.classList.add("show");
    }
  });
});
