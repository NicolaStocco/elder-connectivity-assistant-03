
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, ArrowRight, ShieldCheck, HeartHandshake, MessageSquare, Calendar, ShoppingBag } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">The Challenge We're Solving</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seniors often struggle with digital tasks, while their family members are too busy or too far away to provide constant tech support.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 md:p-8 rounded-2xl mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm flex-1">
                <p className="text-xl md:text-2xl text-gray-700 italic">
                  "Mom, just click the link in the email!"
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-700 font-bold">🧓</span>
                  </div>
                  <p className="ml-3 text-gray-600">Frustrated adult child</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm flex-1">
                <p className="text-xl md:text-2xl text-gray-700 italic">
                  "She doesn't even know where the browser is..."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-700 font-bold">🧒</span>
                  </div>
                  <p className="ml-3 text-gray-600">Concerned grandchild</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ella AI bridges the gap between people and technology, helping elderly people utilize tools in way tailored to
              their needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={<Calendar className="h-8 w-8 text-purple-600" />}
              title="Book Appointments"
              description="Schedule medical appointments, services, and reminders with ease."
            />
            <FeatureCard 
              icon={<MessageSquare className="h-8 w-8 text-purple-600" />}
              title="Reply to Emails"
              description="Handle correspondence with family, friends, and services safely."
            />
            <FeatureCard 
              icon={<ShoppingBag className="h-8 w-8 text-purple-600" />}
              title="Shop Online"
              description="Purchase groceries, gifts, and essentials from trusted retailers."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-purple-600" />}
              title="Protect from Scams"
              description="Flag suspicious content before harm is done."
            />
            <FeatureCard 
              icon={<HeartHandshake className="h-8 w-8 text-purple-600" />}
              title="Learning Mode"
              description="Optionally teach seniors to complete tasks independently over time."
            />
            <FeatureCard 
              icon={<CheckCircle className="h-8 w-8 text-purple-600" />}
              title="Activity Summaries"
              description="Daily updates on completed tasks and upcoming needs."
            />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless experience for both seniors and their families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="h-16 w-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Remote Task Setup</h3>
              <p className="text-gray-600">Family members create tasks via a mobile/web app</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="h-16 w-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">AI Automation</h3>
              <p className="text-gray-600">Our AI agents carry out tasks on the senior's device</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="h-16 w-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Peace of Mind</h3>
              <p className="text-gray-600">Activity summaries keep everyone informed and connected</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">What Our Users Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial 
              quote="Ella AI has given my mother back her independence. She no longer has to wait for me to help with online tasks."
              author="Michael Weber"
              role="Son, Zürich"
            />
            <Testimonial 
              quote="As someone who lives abroad, I was worried about my grandparents managing their digital life. Ella AI has been a game changer."
              author="Lisa Müller"
              role="Granddaughter, Geneva"
            />
          </div>
        </div>
      </section>
      
      {/* Value Proposition */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Peace of mind for you. Independence for them.</h2>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Developed by experts from ETH Zürich and University of St. Gallen, 
                Ella AI bridges the generational technology gap while preserving dignity and autonomy.
              </p>
              <Button className="bg-white text-purple-700 hover:bg-purple-100 text-lg px-8 py-6 h-auto font-semibold rounded-xl">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <PricingSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
