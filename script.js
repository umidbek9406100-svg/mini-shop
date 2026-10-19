
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

const buyBtn = document.getElementById("buyBtn");
const message = document.getElementById("message");

buyBtn.addEventListener("click", function () {
  message.textContent = "Tanlovingiz qabul qilindi! ✅";

  if (tg) {
    tg.HapticFeedback?.notificationOccurred("success");
  }
});
