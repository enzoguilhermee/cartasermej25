const carta = document.getElementById("carta");

carta.addEventListener("click", () => {
  carta.classList.toggle("open");
});

const magnets = document.querySelectorAll(".magnet");

magnets.forEach((magnet) => {
  magnet.addEventListener("mousemove", (e) => {
    const rect = magnet.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    
    // Centraliza o movimento em relação ao centro do elemento
    const moveX = (relX - rect.width / 2) * 0.3;
    const moveY = (relY - rect.height / 2) * 0.3;
    
    gsap.to(magnet, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  magnet.addEventListener("mouseleave", () => {
    gsap.to(magnet, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  });
});

particlesJS('particles-js', {
  particles: {
    number: { value: 120 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 1,
      random: true
     },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" }
    },
    modes: {
      grab: { distance: 140, line_linked:{opacity: 1} },
      repulse: { distance: 200, duration: 0.6},
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});


  const textElement = document.getElementById("typingText");
  const phrases = [
    "QUAL VOZ VOCÊ QUER ECOAR?",
    "O MAIOR SERMEJ ESTÁ POR VIR!"
  ];
  let index = 0;

setInterval(() => {
    // Remove a animação pra poder reiniciar
  textElement.classList.remove("typing");

    // Troca a frase após um pequeno delay (enquanto "some" no CSS)
  setTimeout(() => {
    index = (index + 1) % phrases.length;
    textElement.textContent = phrases[index];
    textElement.classList.add("typing");
  }, 100); // espera a animação apagar completamente antes de trocar
}, 5000); // mesmo tempo da animação CSS
