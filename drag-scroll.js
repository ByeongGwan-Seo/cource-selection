document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".header__list");
  const container = document.querySelector(".container");
  const items = document.querySelectorAll(".header__list-item");
  if (!slider) return;

  let isDown = false;
  let isDraggingContainer = false;
  let startY;
  let containerScrollTop;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("dragging");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((i) => i.classList.remove("selected"));
      item.classList.add("selected");
    });
  });

  container.addEventListener("mousedown", (e) => {
    isDraggingContainer = true;
    container.classList.add("dragging");
    startY = e.pageY - container.offsetTop;
    containerScrollTop = container.scrollTop;
  });

  container.addEventListener("mouseleave", () => {
    isDraggingContainer = false;
    container.classList.remove("dragging");
  });

  container.addEventListener("mouseup", () => {
    isDraggingContainer = false;
    container.classList.remove("dragging");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDraggingContainer) return;
    e.preventDefault();
    const y = e.pageY - container.offsetTop;
    const walkY = y - startY;
    container.scrollTop = containerScrollTop - walkY;
  });
});
