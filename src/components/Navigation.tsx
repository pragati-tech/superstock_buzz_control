
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 business-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SuperStock Pro</span>
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
