const card = document.querySelector(".card");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const input = document.querySelector(".in");
window.addEventListener("keydown", (e) => {
  card2.innerHTML = `${e.keyCode}`;
  if (e.key === " ") {
    card1.innerHTML = `Space`;
  } else {
    card1.innerHTML = `${e.key}`;
  }
  if (e.keyCode >= 48 && e.keyCode <= 57) {
    card.innerHTML = `Number`;
  } else if (
    (e.keyCode >= 65 && e.keyCode <= 90) ||
    (e.keyCode >= 97 && e.keyCode <= 122)
  ) {
    card.innerHTML = `Letter`;
  } else {
    card.innerHTML = `Symbol`;
  }
  Toastify({
    text: "Spam!!!!!!!!!!!!",
    duration: 500,
    destination: "#",

    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, crimson, red)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  Toastify({
    text: "inputgani prosta tak koshganman!",
    duration: 500,
    newWindow: true,
    destination: "#",

    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
});
