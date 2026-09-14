// Nomor WhatsApp tujuan pesanan (format internasional, tanpa tanda + atau 0 di depan)
const WA_NUMBER = "6285748570879";

document.querySelectorAll(".btn-order").forEach(function (button) {
  button.addEventListener("click", function () {
    const item = button.closest(".item");
    const name = item.getAttribute("data-name");
    const price = item.getAttribute("data-price");

    const message = `Halo, saya mau beli ${name} (Rp${price}). Apakah masih tersedia?`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener");
  });
});
