alert("'Ottim digan umitdaman");

const num = document.querySelector(".num");
const sub = document.querySelector(".sub");
const man = document.querySelector(".man");
const bike = document.querySelector(".bike");
const car = document.querySelector(".car");
const plane = document.querySelector(".saml");

const Sman = 3.6,
  Sbike = 20.1,
  Scar = 70,
  Splane = 800;
sub.addEventListener("click", (e) => {
  e.preventDefault();
  const value = num.value.trim();
  if (!value) {
    alert("iltimos 0 dan katta son kiriting");
  } else {
    man.textContent = (value / Sman).toFixed(1).concat(" km");
    bike.textContent = (value / Sbike).toFixed(3).concat(" km");
    car.textContent = (value / Scar).toFixed(3).concat(" km");
    plane.textContent = (value / Splane).toFixed(3).concat(" km");
  }
});
