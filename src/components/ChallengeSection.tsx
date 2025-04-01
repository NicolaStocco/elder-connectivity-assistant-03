
import { Card } from "@/components/ui/card";

const ChallengeSection = () => {
  return (
    <section id="challenge" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Modern Life Has Left the Elderly Behind</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As technology advances and life gets busier, our elderly loved ones often face increasing isolation and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 border-purple-100 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="text-3xl mr-4">📵</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Technology Is Intimidating</h3>
                <p className="text-gray-600">Seniors often struggle with apps, touchscreens, and menus that weren't designed with them in mind.</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 border-purple-100 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="text-3xl mr-4">🧍‍♂️</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Loneliness Is a Hidden Epidemic</h3>
                <p className="text-gray-600">In Switzerland, over 40% of elderly people live alone. Many go days without meaningful conversation.</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 border-purple-100 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="text-3xl mr-4">💼</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Families Are Busy and Stressed</h3>
                <p className="text-gray-600">Children and caregivers want to help — but balancing work, distance, and life makes it hard.</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 border-purple-100 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="text-3xl mr-4">⚠️</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Health Issues Often Go Unnoticed</h3>
                <p className="text-gray-600">Cognitive decline and emotional struggles can escalate before anyone realizes.</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 bg-purple-50 p-6 rounded-xl">
          <blockquote className="italic text-xl text-gray-700 text-center">
            "I want to check in every day… but I can't always call. I just want to know that Mama's okay."
            <footer className="mt-2 text-gray-600 not-italic">— Anna, daughter and caregiver, Zürich</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
