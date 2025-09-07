import { BarChart3, TrendingUp, AlertCircle } from "lucide-react";

interface SceneProps {
  isActive: boolean;
}

export function SkillGapScene({ isActive }: SceneProps) {
  const skillData = [
    { name: "Python", current: 85, required: 90, gap: 5 },
    { name: "Machine Learning", current: 70, required: 95, gap: 25 },
    { name: "Deep Learning", current: 30, required: 85, gap: 55 },
    { name: "Cloud (AWS)", current: 20, required: 80, gap: 60 },
    { name: "SQL", current: 90, required: 85, gap: 0 },
    { name: "Python Advanced", current: 60, required: 90, gap: 30 },
  ];

  return (
    <div className="scene-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 ${isActive ? "animate-fade-in" : ""}`}>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Step 4: Skill Gap Analysis
          </h2>
          <p className="text-xl text-muted-foreground">
            Identify exactly what skills you need to reach your career goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Chart Visualization */}
          <div className={`space-y-6 ${isActive ? "animate-scale-in" : ""}`} style={{ animationDelay: "0.3s" }}>
            <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
              <div className="flex items-center space-x-3 mb-6">
                <BarChart3 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Skills Assessment</h3>
              </div>

              <div className="space-y-6">
                {skillData.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.current}% / {skill.required}%
                      </span>
                    </div>
                    
                    <div className="relative h-6 bg-muted rounded-full overflow-hidden">
                      {/* Current Skills */}
                      <div
                        className={`h-full bg-primary rounded-full transition-all duration-1000 ${
                          isActive ? "animate-pulse" : ""
                        }`}
                        style={{ 
                          width: `${skill.current}%`,
                          animationDelay: `${0.6 + index * 0.1}s`
                        }}
                      />
                      
                      {/* Required Level Indicator */}
                      <div
                        className="absolute top-0 w-1 h-full bg-accent"
                        style={{ left: `${skill.required}%` }}
                      />
                      
                      {/* Gap Indicator */}
                      {skill.gap > 0 && (
                        <div
                          className={`absolute top-0 h-full bg-destructive/30 ${
                            isActive ? "animate-pulse" : ""
                          }`}
                          style={{ 
                            left: `${skill.current}%`,
                            width: `${skill.gap}%`,
                            animationDelay: `${1 + index * 0.1}s`
                          }}
                        />
                      )}
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-primary">Your Level</span>
                      <span className="text-accent">Required</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gap Analysis */}
          <div className={`space-y-6 ${isActive ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.6s" }}>
            {/* Priority Gaps */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-destructive" />
                <h3 className="text-lg font-semibold text-foreground">Priority Gaps</h3>
              </div>
              
              <div className="space-y-4">
                {skillData
                  .filter(skill => skill.gap > 20)
                  .sort((a, b) => b.gap - a.gap)
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`flex items-center justify-between p-3 bg-muted rounded-lg ${
                        isActive ? "animate-slide-in-right" : ""
                      }`}
                      style={{ animationDelay: `${0.9 + index * 0.2}s` }}
                    >
                      <div>
                        <div className="font-medium text-foreground">{skill.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Need {skill.gap}% improvement
                        </div>
                      </div>
                      <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                        High Priority
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Role Focus */}
            <div className={`bg-card border border-border rounded-xl p-6 shadow-soft glow-effect ${
              isActive ? "animate-scale-in" : ""
            }`} style={{ animationDelay: "1.2s" }}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Focus Area: ML Engineer
                </h3>
                <p className="text-muted-foreground text-sm">
                  To become a Machine Learning Engineer, prioritize:
                </p>
                <div className="space-y-2">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                    <div className="font-medium text-destructive">Deep Learning</div>
                    <div className="text-sm text-muted-foreground">55% gap - Critical</div>
                  </div>
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                    <div className="font-medium text-destructive">Cloud (AWS)</div>
                    <div className="text-sm text-muted-foreground">60% gap - Critical</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Stats */}
            <div className={`grid grid-cols-2 gap-4 ${isActive ? "animate-fade-in" : ""}`} 
                 style={{ animationDelay: "1.5s" }}>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-destructive">3</div>
                <div className="text-sm text-muted-foreground">Critical Gaps</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-secondary">6-8</div>
                <div className="text-sm text-muted-foreground">Months to Close</div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className={`mt-8 bg-card border border-border rounded-lg p-4 text-center ${isActive ? "animate-scale-in" : ""}`} 
             style={{ animationDelay: "1.8s" }}>
          <p className="text-foreground font-medium">
            📊 Step 4: Identify your skill gaps
          </p>
        </div>
      </div>
    </div>
  );
}