"use client";
import { useEffect, useRef } from "react";

class WavesCanvas {
  constructor(elm, options = {}) {
    this.canvas = elm;
    if (!this.canvas) return;

    this.settings = {
      waveCount: options.waveCount || 10,
      amplitude: options.amplitude || 80,
      baseSpeed: options.baseSpeed || 0.009,
      waveSpacing: options.waveSpacing || 30,
      lineWidth: options.lineWidth || 1,
      direction: options.direction || "left",
    };

    this.ctx = this.canvas.getContext("2d");
    this.waves = [];

    this.init();
  }

  resizeCanvas = () => {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.waves.forEach((wave) => wave.updateOffset());
  };

  Wave = class {
    constructor(index, settings, canvas, gradient) {
      this.index = index;
      this.phase = index * 0.3;
      this.settings = settings;
      this.canvas = canvas;
      this.gradient = gradient;
      this.updateOffset();
    }

    updateOffset() {
      const totalHeight = (this.settings.waveCount - 1) * this.settings.waveSpacing;
      const centerOffset = (this.canvas.height - totalHeight) / 2;
      this.yOffset = centerOffset + this.index * this.settings.waveSpacing;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.strokeStyle = this.gradient;
      ctx.lineWidth = this.settings.lineWidth;

      let firstX = 0;
      let firstY =
        this.yOffset +
        Math.sin(firstX * 0.005 + this.phase) * this.settings.amplitude +
        Math.cos(firstX * 0.002 + this.phase) * this.settings.amplitude * 0.5;
      ctx.moveTo(firstX, firstY);

      for (let x = 0; x <= this.canvas.width; x += 15) {
        const y =
          this.yOffset +
          Math.sin(x * 0.005 + this.phase) * this.settings.amplitude +
          Math.cos(x * 0.002 + this.phase) * this.settings.amplitude * 0.5;
        ctx.lineTo(x, y);
      }

      ctx.stroke();
    }

    update() {
      const speed = this.settings.direction === "right" ? -this.settings.baseSpeed : this.settings.baseSpeed;
      this.phase += speed;
    }
  };

  init() {
    window.addEventListener("resize", this.resizeCanvas);
    this.resizeCanvas();

    const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
    gradient.addColorStop(0, "#ff004c");   // reddish
    gradient.addColorStop(0.5, "#ffae00"); // yellow
    gradient.addColorStop(1, "#ff5e00");   // orange

    for (let i = 0; i < this.settings.waveCount; i++) {
      this.waves.push(new this.Wave(i, this.settings, this.canvas, gradient));
    }

    this.animate();
  }

  animate = () => {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // subtle fade trail
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.waves.forEach((wave) => {
      wave.updateOffset();
      wave.update();
      wave.draw(this.ctx);
    });

    this.animationFrame = requestAnimationFrame(this.animate);
  };

  destroy() {
    window.removeEventListener("resize", this.resizeCanvas);
    cancelAnimationFrame(this.animationFrame);
    this.waves = [];
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default function WavesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let waves;
    if (canvasRef.current) {
      waves = new WavesCanvas(canvasRef.current);
    }
    return () => {
      if (waves) waves.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        // background: "radial-gradient(circle at center, #1a0d00 20%, #000000 100%)",
      }}
    />
  );
}
