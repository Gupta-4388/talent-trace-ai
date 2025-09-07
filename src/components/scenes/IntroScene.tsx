interface SceneProps {
  isActive: boolean;
}

export function IntroScene({ isActive }: SceneProps) {
  return (
    <div className="scene-container tech-grid">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Logo/Icon */}
        <div className={`relative ${isActive ? "animate-scale-in" : ""}`}>
          <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center glow-effect">
            <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-secondary rounded-full pulse-glow" />
            </div>
          </div>
          {/* Floating particles */}
          <div className="absolute inset-0 -z-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-primary rounded-full opacity-60 ${
                  isActive ? "float-animation" : ""
                }`}
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Title */}
        <div className={`space-y-4 ${isActive ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.3s" }}>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
            AI Career Coach Agent
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Personalized Career Roadmaps with AI
          </p>
        </div>

        {/* Subtitle */}
        <div className={`${isActive ? "animate-slide-in-right" : ""}`} style={{ animationDelay: "0.6s" }}>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Revolutionizing career development through intelligent skill analysis, 
            market insights, and personalized learning pathways
          </p>
        </div>

        {/* Tech Elements */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
          {["AI Analysis", "Market Insights", "Learning Paths"].map((item, index) => (
            <div
              key={item}
              className={`text-center ${isActive ? "animate-scale-in" : ""}`}
              style={{ animationDelay: `${0.8 + index * 0.2}s` }}
            >
              <div className="w-12 h-12 mx-auto bg-card border border-border rounded-lg flex items-center justify-center mb-2 glow-effect">
                <div className="w-6 h-6 bg-gradient-accent rounded-sm" />
              </div>
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}