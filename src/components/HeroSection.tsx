import { CircleAlert } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex-shrink-0 pt-6 pb-2">
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-2">
          {/* Brand Name */}
          <div className="mb-6">
            <h2 className="omnitrix-logo text-4xl">
              Omnitrix<span className="domain text-gray-400">.ai</span>
            </h2>
          </div>

          {/* Main title */}
          <h1 className="hero-title text-xl md:text-2xl lg:text-3xl font-black tracking-tight mb-4 mt-2 relative">
            <span
              className="block omnitrix-text-gradient subtitle text-[1rem] min-[550px]:text-[1.25rem]"
              style={{ lineHeight: "1" }}
            >
              AI Services. Centralized. Powerful.
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto mb-3">
            Access specialized AI services through our centralized platform.
          </p>

          {/* Warning */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 backdrop-blur-sm border border-amber-400/30 rounded-full group hover:border-amber-400/50 transition-all duration-300">
              <CircleAlert
                className="w-2.5 h-2.5 text-amber-400"
                aria-hidden="true"
              />
              <span className="text-xs text-amber-300 font-medium">
                Omnitrix Alpha — AI Services Platform
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
