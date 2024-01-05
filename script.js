const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

const mappedKeys = [];

let audio = new Audio();

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => {
    key.classList.toggle("hide");
  });
};

const playSound = (key) => {
  if (!mappedKeys.includes(key)) return;

  audio.src = `sounds/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  mappedKeys.push(key.dataset.key);
  key.addEventListener("click", () => playSound(key.dataset.key));
});

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);
document.addEventListener("keydown", (e) => playSound(e.key));
