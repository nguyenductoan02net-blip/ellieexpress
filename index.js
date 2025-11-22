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

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("emailInput").value;
  console.log("sdsadsadsas", email);
  emailjs
    .send("service_pywmzcx", "template_gaqn6ng", {
      user_email: email,
    })
    .then(() => {
      alert("Gửi email thành công!");
    })
    .catch((err) => {
      alert("Lỗi khi gửi email");
      console.log(err);
    });
});
