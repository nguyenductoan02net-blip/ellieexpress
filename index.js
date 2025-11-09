const cards = document.querySelectorAll(".card");
let activeIndex = 0;

// Thêm sự kiện click cho từng thẻ
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Xóa class active khỏi tất cả
    cards.forEach((card) => card.classList.remove("active"));

    // Gán active cho thẻ được click
    card.classList.add("active");

    // Cập nhật activeIndex
    activeIndex = index;
  });
});

setInterval(() => {
  // Xóa class active khỏi tất cả
  cards.forEach((card) => card.classList.remove("active"));

  // Tăng index
  activeIndex = (activeIndex + 1) % cards.length;

  // Gán active mới
  cards[activeIndex].classList.add("active");
}, 5000);
