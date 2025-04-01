import { Button } from "@/components/ui/button";
import { CheckCircle, SmartphoneNfc } from "lucide-react";

const CompanionApp = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-ella-softPurple to-white" id="companion-app">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-100">
                <div className="bg-ella-purple text-white p-4 text-center">
                  <h4 className="font-bold">Ella Connect</h4>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6 bg-gray-50 p-3 rounded-lg">
                    <div>
                      <h5 className="font-bold text-sm">Mom's Wellness</h5>
                      <p className="text-xs text-gray-500">Last updated: 15 mins ago</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-green-500 font-bold">Good</span>
                      <div className="flex mt-1">
                        <div className="w-8 h-2 bg-green-500 rounded-l-full"></div>
                        <div className="w-8 h-2 bg-green-300"></div>
                        <div className="w-8 h-2 bg-gray-200 rounded-r-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Mood</span>
                        <span className="text-sm text-green-500">Positive</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Medication</span>
                        <span className="text-sm text-green-500">All taken</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Activity</span>
                        <span className="text-sm text-green-500">Normal</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-ella-purple text-white rounded-lg py-2 text-sm font-medium">
                    Send Message
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ella-softPink rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            </div>
          </div>
          
          <div className="text-left animate-fade-in order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                <span className="gradient-text">Ella Connect</span><br />
                For Family & Caregivers
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                A dedicated companion app designed for loved ones to stay connected and informed, providing peace of mind without being intrusive.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ella-purple mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Check in on your loved one's emotional and physical well-being</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ella-purple mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Send messages, reminders, or share pictures and videos</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ella-purple mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">See activity summaries and wellbeing reports at a glance</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ella-purple mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Add health providers and manage permissions in one place</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ella-purple mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Export data reports for doctor appointments and consultations</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <SmartphoneNfc className="w-6 h-6 text-ella-purple mr-3" />
                <span className="text-gray-700 font-medium">Available on iOS and Android</span>
              </div>
              
              <Button className="mt-8 bg-ella-purple hover:bg-ella-purple/90 text-white rounded-full">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanionApp;