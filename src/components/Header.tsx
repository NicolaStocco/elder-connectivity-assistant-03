
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Header = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto max-w-6xl py-4 px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-purple-700">Ella AI</div>
            {!isMobile && (
              <nav className="ml-10 space-x-8">
                <a href="#features" className="text-gray-600 hover:text-purple-700 font-medium">Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-purple-700 font-medium">How It Works</a>
                <a href="#pricing" className="text-gray-600 hover:text-purple-700 font-medium">Pricing</a>
                <a href="#about" className="text-gray-600 hover:text-purple-700 font-medium">About Us</a>
              </nav>
            )}
          </div>
          
          {isMobile ? (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          ) : (
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="text-purple-700 border-purple-200 hover:bg-purple-50">
                Sign In
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                Get Started
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isOpen && (
          <div className="mt-4 py-3 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-purple-700 font-medium py-2">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-700 font-medium py-2">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-700 font-medium py-2">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-purple-700 font-medium py-2">About Us</a>
              <div className="pt-2 flex flex-col space-y-3">
                <Button variant="outline" className="w-full text-purple-700 border-purple-200 hover:bg-purple-50">
                  Sign In
                </Button>
                <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
