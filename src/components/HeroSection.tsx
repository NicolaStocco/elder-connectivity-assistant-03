
import { Button } from "@/components/ui/button";
import {Activity, ArrowRight, ShieldCheck} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-white pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Ella AI – A Loving Companion for Your Loved One. A Trusted Ally for You.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Ella is a gentle, intelligent AI app designed for the elderly — and their families. It keeps seniors engaged, supported, and safe — while giving you insights, updates, and peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-purple-700 hover:bg-purple-800 text-white text-lg px-8 py-6 h-auto rounded-xl"
              >
                Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-200 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 h-auto rounded-xl"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How Ella Works
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <ShieldCheck className="h-5 w-5 text-purple-700 mr-2" />
              <p className="text-gray-600">
                Secure, private, and designed in Switzerland
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 overflow-hidden relative">
              <div className="aspect-[3/4] bg-purple-100 rounded-lg overflow-hidden">
                <img       
                  src="https://github.com/NicolaStocco/elder-connectivity-assistant-03/blob/main/res/Ella.jpeg?raw=true"
                  alt="Elderly woman using tablet with companion app" 
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>

            <div className="absolute -bottom-4 -right-4 transform rotate-6 bg-white rounded-lg p-3 shadow-md border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 h-10 w-10 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div className="text-sm font-medium text-gray-800">Daily check-in complete!</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-10 transform -rotate-3 bg-white rounded-lg p-3 shadow-md border border-gray-100 ">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Activity className="h-5 w-5 text-purple-700" />
                </div>
                <div className="text-sm text-gray-800">"Ms Wavre seems cheerful today! 😊"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Partner section */}
      {/* At the moment, this is complete bullshit */}
      {/* <div className="container mx-auto max-w-6xl px-4 md:px-8 mt-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">In development with healthcare partners across Switzerland</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="text-gray-400 font-semibold">Swiss Life</div>
            <div className="text-gray-400 font-semibold">Pro Senectute</div>
            <div className="text-gray-400 font-semibold">CSS Versicherung</div>
            <div className="text-gray-400 font-semibold">Spitex</div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
