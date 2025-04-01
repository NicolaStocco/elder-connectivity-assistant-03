import { Activity, Calendar, FileText, Lock } from "lucide-react";

const HealthcareIntegration = () => {
  return (
    <section className="section-padding bg-white" id="healthcare">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            <span className="gradient-text">Healthcare</span> Integration
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ella AI creates a bridge between seniors and their healthcare providers, making care more
            proactive, personalized, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-gradient-to-r from-ella-purple/20 to-ella-softBlue/30 p-6 rounded-lg mb-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <Calendar className="w-5 h-5 text-ella-purple" />
                  <span className="text-sm font-medium">Mood: Cheerful (8/10)</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <Activity className="w-5 h-5 text-ella-purple" />
                  <span className="text-sm font-medium">Activity: 2,345 steps today</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <FileText className="w-5 h-5 text-ella-purple" />
                  <span className="text-sm font-medium">
                    Note: Mentioned headache this morning, resolved after breakfast
                  </span>
                </div>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-4">Shared Medical History</h3>
              <p className="text-gray-700 mb-4">
                Ella builds a comprehensive timeline of interactions, moods, habits, and symptoms that
                helps healthcare providers understand patterns and make better decisions.
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <Lock className="w-4 h-4 mr-2" />
                <span>All data is securely stored and shared only with explicit permission</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="feature-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-3">Shared History</h3>
              <p className="text-gray-700">
                Ella builds a timeline of interactions, moods, habits, and symptoms to help track
                changes over time.
              </p>
            </div>

            <div className="feature-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-bold mb-3">Doctor Notes</h3>
              <p className="text-gray-700">
                Medical professionals can leave notes, after-visit summaries, and care instructions
                that Ella can help explain and remind about.
              </p>
            </div>

            <div className="feature-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-bold mb-3">Behavioral Data</h3>
              <p className="text-gray-700">
                Useful for early detection of cognitive decline, depression, or other health concerns
                that might otherwise go unnoticed.
              </p>
            </div>

            <div className="feature-card animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-xl font-bold mb-3">Consent-Driven Access</h3>
              <p className="text-gray-700">
                Elderly users maintain control over what information gets shared and with whom,
                respecting their privacy and autonomy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareIntegration;
