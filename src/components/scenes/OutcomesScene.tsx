import { Target, BarChart3, Map, Users, CheckCircle } from "lucide-react";

interface SceneProps {
  isActive: boolean;
}

export function OutcomesScene({ isActive }: SceneProps) {
  const outcomes = [
    {
      icon: Target,
      title: "Top 3 Career Role Recommendations",
      description: "AI-matched roles based on your skills and interests",
      color: "bg-primary",
      features: ["95% match accuracy", "Personalized fit score", "Growth potential analysis"]
    },
    {
      icon: BarChart3,
      title: "Skill Gap Analysis with Resources",
      description: "Detailed breakdown of skills needed vs. current level",
      color: "bg-secondary",
      features: ["Visual progress tracking", "Priority ranking", "Learning resources"]
    },
    {
      icon: Map,
      title: "Learning Roadmap Tailored to You",
      description: "Step-by-step path customized for your goals",
      color: "bg-accent",
      features: ["Monthly milestones", "Flexible timeline", "Progress tracking"]
    },
    {
      icon: Users,
      title: "Mentor & Resource Recommendations",
      description: "Connect with experts and curated learning materials",
      color: "bg-destructive",
      features: ["Industry mentors", "Platform integration", "Community access"]
    }
  ];

  return (
    <div className="scene-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isActive ? "animate-fade-in" : ""}`}>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Expected Outcomes
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            What you'll get from the AI Career Coach Agent
          </p>
          
          <div className={`inline-flex items-center space-x-2 bg-card border border-border rounded-full px-6 py-3 shadow-soft ${
            isActive ? "animate-scale-in" : ""
          }`} style={{ animationDelay: "0.3s" }}>
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Comprehensive Career Analysis</span>
          </div>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              className={`group bg-card border border-border rounded-xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 glow-effect ${
                isActive ? "animate-scale-in" : ""
              }`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${outcome.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <outcome.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                  {outcome.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {outcome.features.map((feature, featureIndex) => (
                    <div
                      key={feature}
                      className={`flex items-center space-x-3 ${
                        isActive ? "animate-slide-in-right" : ""
                      }`}
                      style={{ animationDelay: `${1.2 + index * 0.2 + featureIndex * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`bg-card border border-border rounded-2xl p-8 shadow-soft ${
          isActive ? "animate-scale-in" : ""
        }`} style={{ animationDelay: "1.6s" }}>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Complete Career Transformation Package
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "3", label: "Role Matches", icon: "🎯" },
              { value: "15+", label: "Skills Analyzed", icon: "📊" },
              { value: "6", label: "Month Roadmap", icon: "🗺️" },
              { value: "5+", label: "Expert Mentors", icon: "🤝" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center space-y-2 ${
                  isActive ? "animate-fade-in" : ""
                }`}
                style={{ animationDelay: `${1.8 + index * 0.1}s` }}
              >
                <div className="text-3xl">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <div className={`mt-8 bg-gradient-primary rounded-2xl p-8 text-center ${
          isActive ? "animate-scale-in" : ""
        }`} style={{ animationDelay: "2s" }}>
          <div className="text-primary-foreground space-y-4">
            <h3 className="text-xl font-bold">Ready to Transform Your Career?</h3>
            <p className="text-primary-foreground/90">
              Join thousands of professionals who have successfully transitioned to their dream careers
              using AI-powered guidance and personalized roadmaps.
            </p>
            <div className="flex justify-center space-x-8 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm opacity-90">Avg. Months</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$25k+</div>
                <div className="text-sm opacity-90">Salary Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}