"use client";

const Hero = () => {
  return (
    <section className="hero w-full sm:h-screen relative overflow-hidden">
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>

      {/* background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
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
