
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="section-padding bg-slate-50" id="cta">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto rounded-2xl bg-white p-10 md:p-16 relative overflow-hidden shadow-xl border border-gray-100">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">Transform</span> Eldercare?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join our early access program and be among the first to experience how Ella AI can create meaningful connections and support for elderly loved ones.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                Get Early Access
              </Button>
              <Button variant="outline" size="lg" className="border-purple-500 text-purple-600 hover:bg-purple-50 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
