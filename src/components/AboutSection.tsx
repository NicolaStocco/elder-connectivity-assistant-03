
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
      name: "Sam (not altman)",
      role: "CMO",
      description: "Former ETH researcher with a background in AI promotion materials. Mom's name is Ella.",
      imageUrl: "./res/sam.png"
    },
    {
      name: "Estelle Wavre",
      role: "CEO",
      description: "Doing her PhD at University of St. Gallen in the area of startup accelerators.",
      imageUrl: "./res/estelle.png"
    },
    {
      name: "Filip Jaksic",
      role: "CTO",
      description: "Knows how to use MS Paint and Excel (only basics tho).",
      imageUrl: "./res/filip.png"
    },
    {
      name: "Sofiya Guta",
      role: "COO",
      description: "Product designer with expertise in accessibility and senior-friendly interfaces. Former tax" +
          " Consultant at KPMG Switzerland.",
      imageUrl: "./res/sofiya.png"
    },
    {
      name: "Nicola Stocco",
      role: "CISO",
      description: "Healthcare operations expert with experience scaling digital health solutions and information" +
          " security.",
      imageUrl: "./res/nicola.png"
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
