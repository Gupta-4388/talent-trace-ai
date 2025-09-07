import { Github, ArrowRight, Sparkles, Users, Target } from "lucide-react";

interface SceneProps {
  isActive: boolean;
}

export function ClosingScene({ isActive }: SceneProps) {
  return (
    <div className="scene-container tech-grid">
      <div className="text-center space-y-12 max-w-5xl mx-auto">
        {/* Main Title */}
        <div className={`space-y-6 ${isActive ? "animate-fade-in" : ""}`}>
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              AI Career Coach Agent
            </h1>
            {/* Floating particles */}
            <div className="absolute inset-0 -z-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-primary rounded-full opacity-60 ${
                    isActive ? "float-animation" : ""
                  }`}
                  style={{
                    left: `${10 + i * 10}%`,
                    top: `${20 + (i % 3) * 30}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-foreground font-medium">
            Empowering Students & Professionals
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your career journey with AI-powered insights, personalized roadmaps, 
            and expert guidance. The future of career development is here.
          </p>
        </div>

        {/* Key Features Highlight */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isActive ? "animate-scale-in" : ""}`} 
             style={{ animationDelay: "0.6s" }}>
          {[
            {
              icon: Sparkles,
              title: "AI-Powered Analysis",
              description: "Advanced algorithms analyze your skills and match you with perfect career opportunities"
            },
            {
              icon: Target,
              title: "Personalized Roadmaps",
              description: "Custom learning paths designed specifically for your career goals and timeline"
            },
            {
              icon: Users,
              title: "Expert Mentorship",
              description: "Connect with industry professionals and get guidance from experienced mentors"
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-card border border-border rounded-xl p-6 shadow-soft glow-effect hover:scale-105 transition-all duration-300 ${
                isActive ? "animate-slide-in-right" : ""
              }`}
              style={{ animationDelay: `${0.9 + index * 0.2}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`space-y-8 ${isActive ? "animate-fade-in" : ""}`} style={{ animationDelay: "1.5s" }}>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-hard">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Ready to Start Your Journey?</h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                {/* GitHub Button */}
                <div className={`flex items-center space-x-4 bg-muted rounded-xl p-4 hover:bg-card-hover transition-all duration-300 cursor-pointer group ${
                  isActive ? "animate-scale-in" : ""
                }`} style={{ animationDelay: "1.8s" }}>
                  <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-6 h-6 text-background" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">View on GitHub</div>
                    <div className="text-sm text-muted-foreground">Prototype Coming Soon</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Demo Button */}
                <div className={`flex items-center space-x-4 bg-gradient-primary rounded-xl p-4 hover:shadow-glow transition-all duration-300 cursor-pointer group ${
                  isActive ? "animate-scale-in" : ""
                }`} style={{ animationDelay: "2.1s" }}>
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-primary-foreground">Try Demo</div>
                    <div className="text-sm text-primary-foreground/80">Experience the power</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-foreground group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className={`bg-gradient-secondary rounded-2xl p-8 ${isActive ? "animate-scale-in" : ""}`} 
             style={{ animationDelay: "2.4s" }}>
          <h3 className="text-2xl font-bold text-secondary-foreground mb-6">
            The Future of Career Development
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10K+", label: "Students Helped" },
              { value: "95%", label: "Success Rate" },
              { value: "500+", label: "Career Paths" },
              { value: "24/7", label: "AI Support" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center space-y-2 ${
                  isActive ? "animate-fade-in" : ""
                }`}
                style={{ animationDelay: `${2.6 + index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-secondary-foreground">{stat.value}</div>
                <div className="text-sm text-secondary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className={`space-y-4 ${isActive ? "animate-fade-in" : ""}`} style={{ animationDelay: "3s" }}>
          <p className="text-xl text-foreground font-medium">
            Your dream career is just one AI analysis away
          </p>
          <p className="text-muted-foreground">
            Join the revolution in personalized career development
          </p>
        </div>
      </div>
    </div>
  );
}