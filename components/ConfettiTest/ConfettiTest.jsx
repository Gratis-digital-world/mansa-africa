import React, { useState, useEffect, useRef } from "react";

const Confetti = () => {
  const canvasRef = useRef(null);
  const numParticles = 100;
  const particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create confetti particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 5, // Random radius between 5 and 10
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        })`,
        velocity: {
          x: (Math.random() - 0.5) * 2, // Random horizontal velocity
          y: Math.random() * 3 + 2, // Random vertical velocity between 2 and 5
        },
      });
    }

    const animateConfetti = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();

        // Update particle position
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        // Apply gravity
        particle.velocity.y += 0.05;

        // Reset particle when it goes out of the canvas
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.velocity.y = Math.random() * 3 + 2;
        }
      });

      requestAnimationFrame(animateConfetti);
    };

    animateConfetti();

    // Cleanup when the component unmounts
    return () => {
      cancelAnimationFrame(animateConfetti);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0 }} />
  );
};

const ConfettiTest = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const toggleConfetti = () => {
    setShowConfetti(!showConfetti);
  };

  return (
    <div>
      <button onClick={toggleConfetti}>
        {showConfetti ? "Stop Confetti" : "Start Confetti"}
      </button>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default ConfettiTest;
