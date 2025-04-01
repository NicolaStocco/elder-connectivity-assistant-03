
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Simple Setup. Deep Impact.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seamless experience for both seniors and their families.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-purple-100 p-8 rounded-2xl h-full flex flex-col justify-center">
                <div className="h-16 w-16 rounded-full bg-purple-600 text-white flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">A Loved One Sets Up Ella</h3>
              </div>
            </div>
            <div className="md:col-span-2">
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    Using the <strong>Ella Family App</strong>, you create a secure profile for your parent or grandparent, tailored to their needs.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="bg-purple-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>Add medications and reminders</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-purple-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>Set preferred languages (German, French, Italian, English)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-purple-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>Invite doctors or nurses with limited data access</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-purple-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>Choose the device: Ella runs on tablets, smartphones, or pre-configured senior phones</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 md:order-2">
              <div className="bg-blue-100 p-8 rounded-2xl h-full flex flex-col justify-center">
                <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Ella Becomes a Daily Companion</h3>
              </div>
            </div>
            <div className="md:col-span-2 md:order-1">
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    On their device, the elderly user speaks naturally with Ella:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>"What's the weather in Lugano?"</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>"Let's do a quiz!"</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>"I feel a bit tired today…"</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>"Remind me to take my pill at 3."</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Ella listens, remembers, adapts, and responds with care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-green-100 p-8 rounded-2xl h-full flex flex-col justify-center">
                <div className="h-16 w-16 rounded-full bg-green-600 text-white flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">You Stay Informed and Connected</h3>
              </div>
            </div>
            <div className="md:col-span-2">
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    From your Ella Family App:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="bg-green-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>See daily emotional and cognitive summaries</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>Check whether medication was taken</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>Review highlights or warnings (e.g., "low mood detected 3 days in a row")</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>Send encouragement, jokes, or love</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 rounded-full h-2 w-2 mr-3"></div>
                      <span>Export data for doctor visits or follow-up care</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
