import { Brain, Zap, Shield, Flame } from "lucide-react";

const MeetTheAliens: React.FC = () => {
  const aliens = [
    {
      name: "Greymatter",
      description:
        "Advanced cognitive AI specializing in complex problem-solving, data analysis, and strategic thinking. Perfect for research, optimization, and decision-making tasks.",
      icon: Brain,
      color: "purple",
      iconColor: "text-purple-400",
      hoverColor: "text-purple-300",
      titleHoverColor: "text-purple-100",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-purple-600/20",
      borderColor: "border-purple-400/30",
      hoverBorderColor: "hover:border-purple-400/50",
    },
    {
      name: "Fourarms",
      description:
        "Multi-tasking powerhouse designed for handling multiple workflows simultaneously. Ideal for project management, content creation, and productivity automation.",
      icon: Zap,
      color: "cyan",
      iconColor: "text-cyan-400",
      hoverColor: "text-cyan-300",
      titleHoverColor: "text-cyan-100",
      gradientFrom: "from-cyan-500/20",
      gradientTo: "to-cyan-600/20",
      borderColor: "border-cyan-400/30",
      hoverBorderColor: "hover:border-cyan-400/50",
    },
    {
      name: "Diamond Head",
      description:
        "Fortress-grade security AI with impenetrable data protection and privacy controls. Built for sensitive operations and enterprise-level security requirements.",
      icon: Shield,
      color: "green",
      iconColor: "text-green-400",
      hoverColor: "text-green-300",
      titleHoverColor: "text-green-100",
      gradientFrom: "from-green-500/20",
      gradientTo: "to-green-600/20",
      borderColor: "border-green-400/30",
      hoverBorderColor: "hover:border-green-400/50",
    },
    {
      name: "Heat Blast",
      description:
        "High-performance AI engine optimized for speed and efficiency. Delivers blazing-fast results for time-critical tasks and real-time processing needs.",
      icon: Flame,
      color: "red",
      iconColor: "text-red-400",
      hoverColor: "text-red-300",
      titleHoverColor: "text-red-100",
      gradientFrom: "from-red-500/20",
      gradientTo: "to-red-600/20",
      borderColor: "border-red-400/30",
      hoverBorderColor: "hover:border-red-400/50",
    },
  ];

  return (
    <section className="flex-1 py-4 px-6" aria-labelledby="meet-the-services">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-3">
          <h2
            id="meet-the-services"
            className="omnitrix-text-gradient text-xl md:text-2xl font-black text-white mb-1"
          >
            Meet the Aliens
          </h2>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Specialized AI solutions for specific workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {aliens.map((alien, index) => {
            const IconComponent = alien.icon;
            return (
              <div key={index} className="group relative overflow-hidden">
                <div
                  className={`relative h-full p-4 rounded-lg bg-gradient-to-br ${alien.gradientFrom} ${alien.gradientTo} backdrop-blur-xl border ${alien.borderColor} ${alien.hoverBorderColor} transition-all duration-500`}
                >
                  {/* Background effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${alien.gradientFrom} ${alien.gradientTo}`}
                    ></div>
                    <div className="absolute -inset-10 bg-white/10 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000"></div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-white/10 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div
                      className={`relative inline-flex p-3 rounded-lg bg-gradient-to-br ${alien.gradientFrom} ${alien.gradientTo} border ${alien.borderColor} ${alien.hoverBorderColor} group-hover:scale-110 transition-all duration-300`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${alien.iconColor} group-hover:${alien.hoverColor} transition-colors duration-300`}
                        aria-label={alien.name}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-base font-bold text-white mb-2 transition-colors duration-300 group-hover:${alien.titleHoverColor}`}
                  >
                    {alien.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                    {alien.description}
                  </p>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>

                  {/* Alien ID Badge */}
                  <div className="mt-3">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${alien.gradientFrom} ${alien.gradientTo} border ${alien.borderColor} ${alien.iconColor}`}
                    >
                      {alien.name.toUpperCase()}-
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full">
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
              Ready to Get Started?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheAliens;
