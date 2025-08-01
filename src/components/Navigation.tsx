
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-business-500/20 sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-business-500 to-business-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-business-300 to-white bg-clip-text text-transparent">SuperStock Pro</span>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Navigation items can be added here in the future */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
