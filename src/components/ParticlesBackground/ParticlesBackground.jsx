import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");

    let animationId;
    let resizeTimeout;

    const mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    const particleCount =
      window.innerWidth < 768
        ? 35
        : window.innerWidth < 1200
        ? 55
        : 100;

    const particles = [];

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;

      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    class Particle {
      constructor() {
        this.x = Math.random() * parent.clientWidth;
        this.y = Math.random() * parent.clientHeight;

        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;

        // MUDANÇA 1: Aumentei o intervalo do random para os tamanhos ficarem mais visivelmente diferentes (entre 1 e 4)
        this.radius = Math.random() * 2 + 1; 
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= parent.clientWidth)
          this.vx *= -1;

        if (this.y <= 0 || this.y >= parent.clientHeight)
          this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        // MUDANÇA 2: Efeito Glow (Brilho)
        ctx.shadowBlur = 15; // Intensidade do brilho (aumente ou diminua conforme preferir)
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)"; // Cor do brilho

        ctx.fillStyle = "#9dd0eeb7";
        ctx.fill();

        // Reseta o blur para zero aqui, senão as linhas de conexão também vão ficar com glow
        ctx.shadowBlur = 0; 
      }
    }

    function createParticles() {
      particles.length = 0;

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) { // 85 é a distância máxima para as bolinhas se conectarem sozinhas
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(255,255,255,${
              (1 - dist / 85) * 0.3 // Mudei de 0.12 para 0.3 para a linha ficar mais forte
            })`;

            ctx.lineWidth = 1.5; // Aumentei levemente a espessura da linha (era 1)
            ctx.stroke();
          }
        }
      }
    }

    function drawMouseConnections() {
      if (mouse.x === null || mouse.y === null) return;

      particles.forEach((particle) => {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(particle.x, particle.y);

          ctx.strokeStyle = `rgba(255,255,255,${
            (1 - dist / mouse.radius) * 0.4 // Mudei de 0.2 para 0.4 para a linha do mouse ficar mais forte
          })`;

          ctx.lineWidth = 1.5; // Espessura da linha do mouse

          ctx.stroke();
        }
      });
    }

    function animate() {
      ctx.clearRect(0, 0, parent.clientWidth, parent.clientHeight);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawConnections();
      drawMouseConnections();

      animationId = requestAnimationFrame(animate);
    }

    function handleResize() {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        resizeCanvas();
      }, 150);
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function visibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    }

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", visibilityChange);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", visibilityChange);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
        zIndex: 0,
      }}
    />
  );
}