
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section id="pricing" className="py-16 px-4 md:px-8 bg-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Simple Plans That Respect Families and Prioritize Care</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ella is being developed and tested in Switzerland — with local standards, privacy compliance, and multilingual support in mind.
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={toggleBilling} />
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual <span className="text-purple-700">(Save 20%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <Card className="border-purple-100 overflow-hidden">
            <CardHeader className="bg-white pb-6 pt-8 px-6">
              <h3 className="text-xl font-bold text-gray-800">Basic</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  Free
                </span>
              </div>
              <p className="text-gray-600 mt-2">Ideal for early testing & basic use</p>
            </CardHeader>
            <CardContent className="py-6 px-6">
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Ella Companion App for the elderly</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">1 daily check-in</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Limited Family App access</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="py-6 px-6 bg-gray-50">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Join Waitlist
              </Button>
            </CardFooter>
          </Card>
          
          {/* Comfort Plan */}
          <Card className="border-purple-600 overflow-hidden relative shadow-xl">
            <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
              Most Popular
            </div>
            <CardHeader className="bg-white pb-6 pt-8 px-6">
              <h3 className="text-xl font-bold text-gray-800">Comfort</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {isAnnual ? 'CHF 9.90' : 'CHF 12.90'}
                </span>
                <span className="text-gray-500 ml-2">{isAnnual ? '/month, billed annually' : '/month'}</span>
              </div>
              <p className="text-gray-600 mt-2">For families who want peace of mind</p>
            </CardHeader>
            <CardContent className="py-6 px-6">
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">All Basic features</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Unlimited mood/cognitive tracking</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Family App full dashboard</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Emergency alerts</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Invite up to 3 care professionals</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="py-6 px-6 bg-purple-50">
              <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">
                Join Waitlist
              </Button>
            </CardFooter>
          </Card>
          
          {/* Care+ Plan */}
          <Card className="border-purple-100 overflow-hidden">
            <CardHeader className="bg-white pb-6 pt-8 px-6">
              <h3 className="text-xl font-bold text-gray-800">Care+</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {isAnnual ? 'CHF 19.90' : 'CHF 24.90'}
                </span>
                <span className="text-gray-500 ml-2">{isAnnual ? '/month, billed annually' : '/month'}</span>
              </div>
              <p className="text-gray-600 mt-2">For advanced care and home integration</p>
            </CardHeader>
            <CardContent className="py-6 px-6">
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">All Comfort features</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">In-depth behavior reports</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">AI-assisted trend detection</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Custom doctor reports</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Institutional licenses (on request)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="py-6 px-6 bg-gray-50">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Join Waitlist
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          Annual plans available – Swiss billing and support included.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
