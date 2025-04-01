
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">We're Building Ella with Empathy and Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ella AI was born from a question: "What if your grandmother had a friend who never got tired of listening?"
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden border-purple-100 hover:shadow-md transition-shadow">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team Member" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1">Daniel Weber</h3>
              <p className="text-purple-700 text-sm mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm">Former ETH researcher with a background in AI and geriatric care.</p>
            </div>
          </Card>
          
          <Card className="overflow-hidden border-purple-100 hover:shadow-md transition-shadow">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team Member" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1">Sophie Müller</h3>
              <p className="text-purple-700 text-sm mb-3">CTO</p>
              <p className="text-gray-600 text-sm">AI researcher from University of St. Gallen specializing in natural language processing.</p>
            </div>
          </Card>
          
          <Card className="overflow-hidden border-purple-100 hover:shadow-md transition-shadow">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team Member" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1">Marco Rossi</h3>
              <p className="text-purple-700 text-sm mb-3">Head of Healthcare</p>
              <p className="text-gray-600 text-sm">Former healthcare executive with 15+ years in elder care services.</p>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <blockquote className="text-2xl font-light italic text-gray-700 max-w-3xl mx-auto">
            "This is not just tech. This is love, encoded."
          </blockquote>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring Ella into your family?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join our waitlist for early access and help shape the future of elder care.
            </p>
            <Button className="bg-white text-purple-700 hover:bg-purple-100 text-lg px-8 py-6 h-auto font-semibold rounded-xl">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Button } from "@/components/ui/button";
