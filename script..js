const Yes = document.getElementById("Yes");
const No = document.getElementById("No");

const Box = document.getElementById("Box");
const close = document.getElementById("close");
const Boxwrapper = document.getElementById("Boxwrapper");

Yes.addEventListener("click", () => {
  HiddenBox.style.display = "block";
  Boxwrapper.style.display = "none";
});
close.addEventListener("click", () => {
  HiddenBox.style.display = "none";
  Boxwrapper.style.display = "block";
});
function getRandomDerection() {
  const RandomDerection = Math.random() > 0.5 ? 1 : -1;
  const RandomDistance = Math.floor(Math.random() * 200) + 50;
  return RandomDerection * RandomDistance;
}
No.addEventListener("mouseover", () => {
  const randomX = getRandomDerection();
  const randomY = getRandomDerection();

  No.style.transform = `translate(${randomX}px,${randomY}px )`;
});
