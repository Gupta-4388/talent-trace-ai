import { Calendar, CheckCircle, PlayCircle, BookOpen, Users, Star } from "lucide-react";

interface SceneProps {
  isActive: boolean;
}

export function RoadmapScene({ isActive }: SceneProps) {
  const roadmapSteps = [
    {
      month: "Month 1",
      title: "Python Advanced",
      description: "Master advanced Python concepts and libraries",
      progress: 100,
      status: "completed",
      resources: ["Coursera", "Python.org"],
      mentor: "Sarah Chen - Senior Data Scientist"
    },
    {
      month: "Month 2",
      title: "ML Projects",
      description: "Build practical machine learning projects",
      progress: 75,
      status: "in-progress",
      resources: ["Kaggle", "GitHub"],
      mentor: "David Park - ML Engineer at Google"
    },
    {
      month: "Month 3",
      title: "Deep Learning",
      description: "Neural networks and deep learning frameworks",
      progress: 25,
      status: "upcoming",
      resources: ["Fast.ai", "PyTorch"],
      mentor: "Alex Rodriguez - AI Researcher"
    },
    {
      month: "Month 4",
      title: "Cloud Skills (AWS)",
      description: "Cloud deployment and ML infrastructure",
      progress: 0,
      status: "upcoming",
      resources: ["AWS Training", "A Cloud Guru"],
      mentor: "Maria Johnson - Cloud Architect"
    }
  ];

  const platforms = [
    { name: "YouTube", icon: "📺", color: "bg-destructive" },
    { name: "Coursera", icon: "🎓", color: "bg-primary" },
    { name: "LinkedIn", icon: "💼", color: "bg-secondary" },
    { name: "Kaggle", icon: "🏆", color: "bg-accent" }
  ];

  return (
    <div className="scene-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 ${isActive ? "animate-fade-in" : ""}`}>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Step 6: Personalized Learning Roadmap
          </h2>
          <p className="text-xl text-muted-foreground">
            Your custom path to career success with mentors and resources
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Roadmap */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`bg-card border border-border rounded-xl p-6 shadow-soft ${
              isActive ? "animate-scale-in" : ""
            }`} style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Your Learning Path</h3>
              </div>

              <div className="space-y-6">
                {roadmapSteps.map((step, index) => (
                  <div key={step.month} className="relative">
                    {/* Timeline Line */}
                    {index < roadmapSteps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-border" />
                    )}
                    
                    <div className={`flex items-start space-x-4 ${
                      isActive ? "animate-slide-in-right" : ""
                    }`} style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                      {/* Status Icon */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        step.status === "completed" ? "bg-primary" :
                        step.status === "in-progress" ? "bg-secondary" : "bg-muted"
                      }`}>
                        {step.status === "completed" ? (
                          <CheckCircle className="w-6 h-6 text-primary-foreground" />
                        ) : step.status === "in-progress" ? (
                          <PlayCircle className="w-6 h-6 text-secondary-foreground" />
                        ) : (
                          <Calendar className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">{step.month}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            step.status === "completed" ? "bg-primary/10 text-primary" :
                            step.status === "in-progress" ? "bg-secondary/10 text-secondary" :
                            "bg-muted text-muted-foreground"
                          }`}>
                            {step.status === "completed" ? "Completed" :
                             step.status === "in-progress" ? "In Progress" : "Upcoming"}
                          </div>
                        </div>

                        <p className="text-foreground">{step.description}</p>

                        {/* Progress Bar */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-foreground">{step.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-1000 ${
                                step.status === "completed" ? "bg-primary" :
                                step.status === "in-progress" ? "bg-secondary" : "bg-muted"
                              }`}
                              style={{ 
                                width: `${step.progress}%`,
                                animationDelay: `${1 + index * 0.2}s`
                              }}
                            />
                          </div>
                        </div>

                        {/* Resources */}
                        <div className="flex flex-wrap gap-2">
                          {step.resources.map((resource) => (
                            <span
                              key={resource}
                              className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                            >
                              {resource}
                            </span>
                          ))}
                        </div>

                        {/* Mentor */}
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>Mentor: {step.mentor}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Resources & Mentors */}
          <div className="space-y-6">
            {/* Learning Platforms */}
            <div className={`bg-card border border-border rounded-xl p-6 shadow-soft ${
              isActive ? "animate-scale-in" : ""
            }`} style={{ animationDelay: "0.9s" }}>
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Resources</h3>
              </div>
              
              <div className="space-y-3">
                {platforms.map((platform, index) => (
                  <div
                    key={platform.name}
                    className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-card-hover transition-colors cursor-pointer ${
                      isActive ? "animate-fade-in" : ""
                    }`}
                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  >
                    <span className="text-lg">{platform.icon}</span>
                    <span className="text-foreground font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentor Spotlight */}
            <div className={`bg-card border border-border rounded-xl p-6 shadow-soft glow-effect ${
              isActive ? "animate-scale-in" : ""
            }`} style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-5 h-5 text-secondary" />
                <h3 className="text-lg font-semibold text-foreground">Featured Mentor</h3>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sarah Chen</h4>
                  <p className="text-sm text-muted-foreground">Senior Data Scientist at Meta</p>
                </div>
                <p className="text-sm text-foreground">
                  "Specialized in ML model deployment and career transitions in tech"
                </p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Summary */}
            <div className={`bg-card border border-border rounded-xl p-6 shadow-soft ${
              isActive ? "animate-scale-in" : ""
            }`} style={{ animationDelay: "1.5s" }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Progress Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="font-bold text-primary">50%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time to Goal</span>
                  <span className="font-bold text-secondary">3 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Skills Gained</span>
                  <span className="font-bold text-accent">8/12</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className={`mt-8 bg-card border border-border rounded-lg p-4 text-center ${isActive ? "animate-scale-in" : ""}`} 
             style={{ animationDelay: "1.8s" }}>
          <p className="text-foreground font-medium">
            🗺️ Step 6: Personalized roadmap and mentor resources
          </p>
        </div>
      </div>
    </div>
  );
}