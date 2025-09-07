import { Brain, Briefcase, Target, ArrowRight } from "lucide-react";

interface SceneProps {
  isActive: boolean;
}

export function RoleMatchingScene({ isActive }: SceneProps) {
  const roles = [
    { 
      title: "Data Analyst", 
      match: "95%", 
      color: "bg-primary",
      icon: "📊"
    },
    { 
      title: "Machine Learning Engineer", 
      match: "87%", 
      color: "bg-secondary",
      icon: "🤖"
    },
    { 
      title: "Cloud Engineer", 
      match: "72%", 
      color: "bg-accent",
      icon: "☁️"
    },
  ];

  return (
    <div className="scene-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 ${isActive ? "animate-fade-in" : ""}`}>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Step 3: AI Role Matching
          </h2>
          <p className="text-xl text-muted-foreground">
            Intelligent AI connects your skills to the perfect career opportunities
          </p>
        </div>

        {/* AI Brain Visualization */}
        <div className="relative mb-16">
          {/* Central AI Brain */}
          <div className={`flex justify-center ${isActive ? "animate-scale-in" : ""}`} 
               style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow pulse-glow">
                <Brain className="w-16 h-16 text-primary-foreground" />
              </div>
              
              {/* Neural Network Lines */}
              {isActive && (
                <>
                  {/* Left connections */}
                  <div className="absolute top-1/2 -left-32 w-32 h-px bg-gradient-to-r from-primary to-transparent animate-tech-scan" 
                       style={{ animationDelay: "0.6s" }} />
                  <div className="absolute top-1/4 -left-28 w-28 h-px bg-gradient-to-r from-secondary to-transparent animate-tech-scan" 
                       style={{ animationDelay: "0.8s" }} />
                  <div className="absolute top-3/4 -left-28 w-28 h-px bg-gradient-to-r from-accent to-transparent animate-tech-scan" 
                       style={{ animationDelay: "1s" }} />
                  
                  {/* Right connections */}
                  <div className="absolute top-1/2 -right-32 w-32 h-px bg-gradient-to-l from-primary to-transparent animate-tech-scan" 
                       style={{ animationDelay: "1.2s" }} />
                  <div className="absolute top-1/4 -right-28 w-28 h-px bg-gradient-to-l from-secondary to-transparent animate-tech-scan" 
                       style={{ animationDelay: "1.4s" }} />
                  <div className="absolute top-3/4 -right-28 w-28 h-px bg-gradient-to-l from-accent to-transparent animate-tech-scan" 
                       style={{ animationDelay: "1.6s" }} />
                </>
              )}
            </div>
          </div>

          {/* Skills (Left Side) */}
          <div className="absolute left-0 top-0 space-y-4">
            {["Python", "SQL", "ML"].map((skill, index) => (
              <div
                key={skill}
                className={`bg-card border border-border rounded-lg px-4 py-2 shadow-soft ${
                  isActive ? "animate-slide-in-right" : ""
                }`}
                style={{ 
                  animationDelay: `${0.6 + index * 0.2}s`,
                  top: `${index * 80 + 40}px`
                }}
              >
                <span className="text-foreground font-medium">{skill}</span>
              </div>
            ))}
          </div>

          {/* Roles (Right Side) */}
          <div className="absolute right-0 top-0 space-y-4">
            {roles.map((role, index) => (
              <div
                key={role.title}
                className={`flex items-center space-x-3 bg-card border border-border rounded-lg px-4 py-3 shadow-soft glow-effect ${
                  isActive ? "animate-slide-in-right" : ""
                }`}
                style={{ 
                  animationDelay: `${1.2 + index * 0.2}s`,
                  top: `${index * 80 + 20}px`
                }}
              >
                <span className="text-2xl">{role.icon}</span>
                <div>
                  <div className="text-foreground font-semibold">{role.title}</div>
                  <div className={`text-sm font-medium ${
                    role.color === "bg-primary" ? "text-primary" :
                    role.color === "bg-secondary" ? "text-secondary" : "text-accent"
                  }`}>
                    {role.match} match
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className={`bg-card border border-border rounded-xl p-6 hover:bg-card-hover transition-all duration-300 glow-effect ${
                isActive ? "animate-scale-in" : ""
              }`}
              style={{ animationDelay: `${1.8 + index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{role.icon}</span>
                <div className={`px-3 py-1 rounded-full text-sm font-medium text-white ${role.color}`}>
                  {role.match}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{role.title}</h3>
              
              <div className="flex items-center text-muted-foreground text-sm">
                <Target className="w-4 h-4 mr-2" />
                Perfect skill alignment
              </div>
              
              <div className="mt-4 flex items-center text-primary hover:text-primary-glow cursor-pointer">
                <span className="text-sm font-medium">View Details</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className={`bg-card border border-border rounded-lg p-4 text-center ${isActive ? "animate-scale-in" : ""}`} 
             style={{ animationDelay: "2.4s" }}>
          <p className="text-foreground font-medium">
            🎯 Step 3: AI matches you with top career roles
          </p>
        </div>
      </div>
    </div>
  );
}