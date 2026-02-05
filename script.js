/* Typing Effect */
const text = "This website took me hours…\nI may not know how to code perfectly 😅\nBut I know exactly who I want 🫶";
let i = 0;
const speed = 40;
const typingEl = document.getElementById("typing");

function typeWriter() {
  if (i < text.length) {
    typingEl.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("question").style.display = "block";
    document.getElementById("buttons").style.display = "flex";
  }
}
typeWriter();

/* No Button Runs Away */
const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});

/* YES Click */
function yesClicked() {
  document.querySelector(".card").innerHTML =
    document.getElementById("final").innerHTML;

  // Play song
  const song = document.getElementById("loveSong");
  song.volume = 0.7;
  song.play();

  startConfetti();
}


/* Confetti */
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 200 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 10,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.d;
      if (p.y > canvas.height) p.y = -10;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
