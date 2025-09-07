import { FileText, Zap, Tag } from "lucide-react";

interface SceneProps {
  isActive: boolean;
}

export function ResumeParsingScene({ isActive }: SceneProps) {
  const skills = [
    { name: "Python", color: "bg-primary" },
    { name: "SQL", color: "bg-secondary" },
    { name: "Machine Learning", color: "bg-accent" },
    { name: "React", color: "bg-primary" },
    { name: "Data Analysis", color: "bg-secondary" },
    { name: "JavaScript", color: "bg-accent" },
  ];

  return (
    <div className="scene-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Side - Animation */}
        <div className="relative">
          {/* Resume Document */}
          <div className={`relative ${isActive ? "animate-scale-in" : ""}`}>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-hard max-w-md mx-auto">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-foreground">Resume.pdf</span>
                </div>
                
                {/* Content Lines */}
                <div className="space-y-2">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 bg-muted rounded ${isActive ? "animate-tech-scan" : ""}`}
                      style={{ 
                        width: `${60 + Math.random() * 40}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Scanning Effect */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-tech-scan" />
              )}
            </div>
          </div>

          {/* Extracted Skills */}
          <div className="mt-8 space-y-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`flex items-center space-x-3 ${
                  isActive ? "animate-slide-in-right" : ""
                }`}
                style={{ animationDelay: `${1 + index * 0.2}s` }}
              >
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium text-white ${skill.color} shadow-glow`}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`space-y-6 ${isActive ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.3s" }}>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold gradient-text">
              Step 2: AI Skill Extraction
            </h2>
            <p className="text-xl text-muted-foreground">
              Advanced AI analyzes your resume to identify skills and experience
            </p>
          </div>

          <div className="space-y-6">
            {/* AI Processing */}
            <div className={`bg-card border border-border rounded-xl p-6 glow-effect ${
              isActive ? "animate-scale-in" : ""
            }`} style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">AI Processing</h3>
                  <p className="text-muted-foreground text-sm">Analyzing document content...</p>
                </div>
              </div>
              
              {/* Progress bars */}
              <div className="space-y-3">
                {["Text Recognition", "Skill Identification", "Experience Mapping"].map((task, index) => (
                  <div key={task} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{task}</span>
                      <span className="text-muted-foreground">100%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`bg-gradient-primary h-2 rounded-full transition-all duration-1000 ${
                          isActive ? "animate-pulse" : ""
                        }`}
                        style={{ 
                          width: "100%",
                          animationDelay: `${0.9 + index * 0.3}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className={`grid grid-cols-2 gap-4 ${isActive ? "animate-fade-in" : ""}`} 
                 style={{ animationDelay: "1.5s" }}>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">Skills Identified</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-secondary">5</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className={`bg-card border border-border rounded-lg p-4 ${isActive ? "animate-scale-in" : ""}`} 
               style={{ animationDelay: "1.8s" }}>
            <p className="text-center text-foreground font-medium">
              🔍 Step 2: AI extracts your skills and experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}