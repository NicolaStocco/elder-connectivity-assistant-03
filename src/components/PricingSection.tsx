
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for your family's needs.
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
                  {isAnnual ? 'CHF 9.90' : 'CHF 12.90'}
                </span>
                <span className="text-gray-500 ml-2">{isAnnual ? '/month, billed annually' : '/month'}</span>
              </div>
              <p className="text-gray-600 mt-2">Perfect for getting started</p>
            </CardHeader>
            <CardContent className="py-6 px-6">
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">10 tasks per month</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Basic activity summaries</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Scam protection</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="py-6 px-6 bg-gray-50">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          
          {/* Standard Plan */}
          <Card className="border-purple-600 overflow-hidden relative shadow-xl">
            <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
              Most Popular
            </div>
            <CardHeader className="bg-white pb-6 pt-8 px-6">
              <h3 className="text-xl font-bold text-gray-800">Family</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {isAnnual ? 'CHF 19.90' : 'CHF 24.90'}
                </span>
                <span className="text-gray-500 ml-2">{isAnnual ? '/month, billed annually' : '/month'}</span>
              </div>
              <p className="text-gray-600 mt-2">Best for active families</p>
            </CardHeader>
            <CardContent className="py-6 px-6">
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Unlimited tasks</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Detailed activity dashboard</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Enhanced scam protection</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Multiple family members</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="py-6 px-6 bg-purple-50">
              <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          
          {/* Premium Plan */}
          <Card className="border-purple-100 overflow-hidden">
            <CardHeader className="bg-white pb-6 pt-8 px-6">
              <h3 className="text-xl font-bold text-gray-800">Premium</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {isAnnual ? 'CHF 39.90' : 'CHF 49.90'}
                </span>
                <span className="text-gray-500 ml-2">{isAnnual ? '/month, billed annually' : '/month'}</span>
              </div>
              <p className="text-gray-600 mt-2">Complete care solution</p>
            </CardHeader>
            <CardContent className="py-6 px-6">
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Everything in Family</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Human concierge backup</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Emergency assistance</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">24/7 phone support</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Custom integrations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="py-6 px-6 bg-gray-50">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
