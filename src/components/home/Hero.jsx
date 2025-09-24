"use client";

const Hero = () => {
  return (
    <section className="hero w-full relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>

      <video
        className="w-full h-auto"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/home/hero/herovid.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
