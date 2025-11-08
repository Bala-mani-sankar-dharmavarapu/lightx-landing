const SpaceBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0">
        <img
          src="/bg.webp"
          alt=""
          className="w-full h-full object-cover opacity-90"
          style={{ objectPosition: "calc(50% - 0.78vw) top" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.6) 5%, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.35) 15%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.05) 30%, transparent 35%, transparent 100%)",
          }}
        />
        <div className="omnitrix-backdrop" role="presentation">
          <div className="omnitrix-backdrop__mark" />
          <div className="omnitrix-backdrop__glow" />
          <div className="omnitrix-backdrop__gradient" />
        </div>
      </div>
      <div className="nebula-clouds"></div>
      <div className="starfield-far"></div>
      <div className="starfield-mid"></div>
      <div className="starfield-near"></div>
      <div
        className="floating-stars absolute"
        style={{ top: 0, height: "200vh", width: "100%" }}
      ></div>
      <div className="constellation-lines"></div>
    </div>
  );
};

export default SpaceBackground;
