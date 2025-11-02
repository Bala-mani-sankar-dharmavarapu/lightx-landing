import { useState } from "react";
import {
  Menu,
  X,
  BarChart3,
  MessageSquare,
  Calendar,
  TrendingUp,
  Users,
  Settings,
  FileText,
  Zap,
} from "lucide-react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-3 bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 group"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <Menu
            className={`w-6 h-6 text-white transition-all duration-300 ${
              isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
            }`}
          />
          <X
            className={`absolute top-0 left-0 w-6 h-6 text-white transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-xl border-l border-white/20 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Menu</h2>
              <button
                onClick={closeMenu}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Menu Content */}
          <div className="flex-1 p-4">
            {/* Date Analytics Section */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-lg">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  Date Analytics
                </h3>
              </div>

              <div className="space-y-0.5 ml-8">
                <a
                  href="#"
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                >
                  <Calendar className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Calendar View
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Trends Analysis
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                >
                  <FileText className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Reports
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                >
                  <Settings className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Settings
                  </span>
                </a>
              </div>
            </div>

            {/* RCS Chat Section */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-400/30 rounded-lg">
                  <MessageSquare className="w-4 h-4 text-green-400" />
                </div>
                <h3 className="text-base font-semibold text-white">RCS Chat</h3>
              </div>

              <div className="space-y-0.5 ml-8">
                <a
                  href="#"
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                >
                  <Users className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-400 transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Team Chat
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                >
                  <Zap className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-400 transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Quick Actions
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-400 transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Messages
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                >
                  <Settings className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-400 transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Preferences
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
