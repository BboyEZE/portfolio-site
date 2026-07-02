// Typewriter effect for the hero section. Words come from i18n.js (window.I18N.words)
// so the rotating titles also switch between English and Japanese.

document.addEventListener("DOMContentLoaded", () => {
  const e = document.getElementById("typer");
  if (!e) return;

  const speed = { type: 80, delete: 40, pause: 500 };
  let words = [];
  let i = 0, j = 0, deleting = false, gen = 0;

  function loadWords() {
    const I = window.I18N;
    if (I && I.words) {
      words = I.words[I.lang] || I.words.en;
    } else {
      words = ["Front End Developer", "Web Developer", "Problem Solver"];
    }
  }

  function typer(myGen) {
    if (myGen !== gen) return; // a newer run has started (language changed)
    const word = words[i] || "";
    e.textContent = word.slice(0, j);

    if (!deleting && j < word.length) {
      j++;
      setTimeout(() => typer(myGen), speed.type);
    } else if (deleting && j > 0) {
      j--;
      setTimeout(() => typer(myGen), speed.delete);
    } else {
      deleting = !deleting;
      if (!deleting) {
        i = (i + 1) % words.length;
        setTimeout(() => typer(myGen), speed.pause);
      } else {
        setTimeout(() => typer(myGen), speed.type);
      }
    }
  }

  function start() {
    gen++;
    i = 0; j = 0; deleting = false;
    loadWords();
    typer(gen);
  }

  start();
  window.addEventListener("langchange", start);
});
