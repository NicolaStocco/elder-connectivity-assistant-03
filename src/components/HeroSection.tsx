
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-white pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              A remote, AI-powered assistant for seniors
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Ella AI helps seniors navigate the digital world — powered by their family, guided by AI.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-purple-700 hover:bg-purple-800 text-white text-lg px-8 py-6 h-auto rounded-xl"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-200 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 h-auto rounded-xl"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <ShieldCheck className="h-5 w-5 text-purple-700 mr-2" />
              <p className="text-gray-600">
                Secure, private, and designed for the elderly
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 overflow-hidden relative">
              <div className="aspect-[4/3] bg-purple-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Elderly woman using tablet with granddaughter" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 transform rotate-6 bg-white rounded-lg p-3 shadow-md border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 h-10 w-10 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <div className="text-sm font-medium text-gray-800">Appointment booked!</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 transform -rotate-3 bg-white rounded-lg p-3 shadow-md border border-gray-100 max-w-[180px]">
              <div className="text-sm text-gray-800">"Ella helped me order groceries today!"</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted by section */}
      <div className="container mx-auto max-w-6xl px-4 md:px-8 mt-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">Trusted by families across Switzerland</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="text-gray-400 font-semibold">Swiss Life</div>
            <div className="text-gray-400 font-semibold">Pro Senectute</div>
            <div className="text-gray-400 font-semibold">CSS Versicherung</div>
            <div className="text-gray-400 font-semibold">Spitex</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
