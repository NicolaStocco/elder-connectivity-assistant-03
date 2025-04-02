
import { Card } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

// Team member interface
interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const AboutSection = () => {
  // Define team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Estelle Wavre",
      role: "CEO",
      description: "MBI at HSG, organized SwissHacks with 150 participants and enhancing the START Fellowship Accelerator",
      imageUrl: "https://github.com/NicolaStocco/elder-connectivity-assistant-03/blob/main/res/estelle.png?raw=true"
    },
    {
      name: "Sam Moor-Smith",
      role: "CMO",
      description: "MSc CS at ETH complemented by practical experience developing AI/ML software solutions. Internship at IBM.",
      imageUrl: "https://github.com/NicolaStocco/elder-connectivity-assistant-03/blob/main/res/sam.png?raw=true"
    },
    {
      name: "Sofiya Guta",
      role: "COO",
      description: "Consultant at KPMG Switzerland with an MBI from HSG. Experienced in managing financials of companies.",
      imageUrl: "https://github.com/NicolaStocco/elder-connectivity-assistant-03/blob/main/res/sofiya.png?raw=true"
    },
    {
      name: "Filip Jaksic",
      role: "CTO",
      description: "MSc CS at ETH with hands-on experience in delivering software solutions. Internship at" +
          " Google.",
      imageUrl: "https://github.com/NicolaStocco/elder-connectivity-assistant-03/blob/main/res/filip.png?raw=true"
    },
    {
      name: "Nicola Stocco",
      role: "CISO",
      description: "Experienced product owner and information security professional, specializing in data security." +
          " MSc Cyber-sec at ETH.",
      imageUrl: "https://github.com/NicolaStocco/elder-connectivity-assistant-03/blob/main/res/nicola.png?raw=true"
    }
  ];
  
  // Reference to carousel API
  const apiRef = useRef<any>(null);
  
  // Auto-scroll functionality
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      if (apiRef.current && apiRef.current.canScrollNext()) {
        apiRef.current.scrollNext();
      } else if (apiRef.current) {
        // Reset to beginning when reaching the end
        apiRef.current.scrollTo(0);
      }
    }, 5000); // Scroll every 5 seconds
    
    return () => clearInterval(autoPlayInterval);
  }, []);

  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">We're Building Ella with Empathy and Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ella AI was born from a question: "What if your grandmother had a friend who never got tired of listening?"
          </p>
        </div>
        
        <div className="px-4 sm:px-8 mb-12">
          <Carousel 
            className="w-full" 
            setApi={(api) => (apiRef.current = api)}
            opts={{
              align: "start",
              loop: true
            }}
          >
            <CarouselContent className="-ml-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/4 lg:basis-1/5">
                  <Card className="overflow-hidden border-purple-100 hover:shadow-md transition-shadow h-full">
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-purple-700 text-sm mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.description}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/*<CarouselPrevious className="left-0 sm:-left-12" />*/}
            {/*<CarouselNext className="right-0 sm:-right-12" />*/}
          </Carousel>
        </div>
        
        <div className="mt-12 text-center">
          <blockquote className="text-2xl font-light italic text-gray-700 max-w-3xl mx-auto">
            "This is not just tech. This is love, encoded."
          </blockquote>
        </div>
        
        {/* <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring Ella into your family?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join our waitlist for early access and help shape the future of elder care.
            </p>
            <Button className="bg-white text-purple-700 hover:bg-purple-100 text-lg px-8 py-6 h-auto font-semibold rounded-xl">
              Join the Waitlist
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
