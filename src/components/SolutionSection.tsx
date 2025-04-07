import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, CalendarCheck, Brain, VolumeX, Phone, Activity } from "lucide-react";


  const SolutionSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
      <section id="solutions" className="py-16 px-4 md:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ella Is Not Just an App — She's a Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ella is an AI-powered companion app for seniors, designed to talk, listen, inform, and care — all in natural, simple conversations. It's paired with a family companion app, giving loved ones and healthcare professionals the insights they need, without intruding.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
              <div>
                <div className="bg-purple-700 text-white py-3 px-6 rounded-t-lg inline-block">
                  <h3 className="text-xl font-semibold">💜 For the Elderly (Ella App)</h3>
                </div>
                <Card className="border-purple-200 shadow-md">
                  <CardContent className="pt-6 pb-4">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <MessageSquare className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Voice-first, intuitive design — no need to type</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <Brain className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Ask anything: "What's in the news?", "How do I cook rösti?", "What is TikTok?"</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <CalendarCheck className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Daily check-ins: mood, memory, wellness, hydration</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <Activity className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Fun games and challenges for cognitive stimulation</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <Phone className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Easy communication: "Call my daughter" or "Send her a voice note"</p>
                        </div>
                      </li>
                      {/* ▶️ YouTube Short Button */}
                      <li className="flex items-start justify-center">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-purple-800 transition"
                      >
                        🎥 Watch Ella in Action
                      </button>
                    </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                    src="https://github.com/NicolaStocco/elder-connectivity-assistant-03/blob/main/res/Ella-app_noBG.png?raw=true"
                    alt="Ella App interface showing daily updates and reminders"
                    className="rounded-lg max-w-full h-auto"
                    style={{ maxHeight: '600px' }}
                />
              </div>
            </div>

          {/* 📽️ Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl w-[360px] h-[640px]">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-3 text-white bg-purple-700 hover:bg-purple-800 rounded-full w-8 h-8 flex items-center justify-center z-10"
                >
                  ✕
                </button>
                <iframe
                  width="360"
                  height="640"
                  src="https://www.youtube.com/embed/kdJkGHe5uG8?autoplay=1&controls=1"
                  title="Ella YouTube Short"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          )}

            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
              <div className="md:w-1/2 flex justify-center">
                <img
                    src="https://github.com/NicolaStocco/elder-connectivity-assistant-03/blob/main/res/Ella-family-app_noBG.png?raw=true"
                    alt="Ella Family App interface showing elder's status and activities"
                    className="rounded-lg max-w-full h-auto"
                    style={{ maxHeight: '600px' }}
                />
              </div>
              <div>
                <div className="bg-blue-600 text-white py-3 px-6 rounded-t-lg inline-block">
                  <h3 className="text-xl font-semibold">💬 For Loved Ones (Ella Family App)</h3>
                </div>
                <Card className="border-blue-200 shadow-md">
                  <CardContent className="pt-6 pb-4">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <MessageSquare className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Set up and manage Ella remotely</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Activity className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">View daily reports: mood, activity, cognitive changes</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Phone className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Send photos, reminders, voice messages</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <CalendarCheck className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Monitor health habits (meds taken, hydration, sleep quality)</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <VolumeX className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">Receive alerts for unusual behavior or missed check-ins</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center shadow-inner">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Peace of mind, at a glance</h3>
            <p className="text-gray-700 italic text-xl">"Ella says Grandpa has been more forgetful this week."</p>
          </div>

        </div>
      </section>
  );
};

export default SolutionSection;
