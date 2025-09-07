import { FileText, Upload, User } from "lucide-react";

interface SceneProps {
  isActive: boolean;
}

export function InputScene({ isActive }: SceneProps) {
  return (
    <div className="scene-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Side - Illustration */}
        <div className="relative">
          {/* Laptop Mockup */}
          <div className={`relative ${isActive ? "animate-scale-in" : ""}`}>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-hard">
              <div className="bg-muted rounded-lg h-64 flex flex-col items-center justify-center space-y-4">
                {/* Upload Area */}
                <div className={`border-2 border-dashed border-border rounded-lg p-8 w-full text-center ${
                  isActive ? "animate-pulse-glow" : ""
                }`} style={{ animationDelay: "0.5s" }}>
                  <Upload className="w-12 h-12 mx-auto text-primary mb-4" />
                  <p className="text-foreground font-medium">Upload Your Resume</p>
                  <p className="text-muted-foreground text-sm">PDF, DOC, or TXT</p>
                </div>
                
                {/* OR Divider */}
                <div className="flex items-center w-full">
                  <div className="flex-1 h-px bg-border"></div>
                  <span className="px-4 text-muted-foreground text-sm">OR</span>
                  <div className="flex-1 h-px bg-border"></div>
                </div>
                
                {/* Input Field */}
                <div className="w-full">
                  <div className="bg-input rounded-lg p-3 border border-border">
                    <p className="text-foreground text-sm">Enter your career interests...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4">
            <div className={`bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm shadow-glow ${
              isActive ? "float-animation" : ""
            }`} style={{ animationDelay: "1s" }}>
              <FileText className="w-4 h-4 inline mr-1" />
              Resume.pdf
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4">
            <div className={`bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm shadow-glow ${
              isActive ? "float-animation" : ""
            }`} style={{ animationDelay: "1.5s" }}>
              <User className="w-4 h-4 inline mr-1" />
              Career Goals
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`space-y-6 ${isActive ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.3s" }}>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold gradient-text">
              Step 1: Input Your Data
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your AI-powered career journey by providing your information
            </p>
          </div>

          <div className="space-y-4">
            <div className={`flex items-start space-x-4 ${isActive ? "animate-slide-in-right" : ""}`} 
                 style={{ animationDelay: "0.6s" }}>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Upload Resume</h3>
                <p className="text-muted-foreground">
                  Upload your existing resume in PDF, DOC, or TXT format for comprehensive analysis
                </p>
              </div>
            </div>

            <div className={`flex items-start space-x-4 ${isActive ? "animate-slide-in-right" : ""}`} 
                 style={{ animationDelay: "0.9s" }}>
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Career Interests</h3>
                <p className="text-muted-foreground">
                  Alternatively, describe your career goals and interests to get personalized recommendations
                </p>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className={`bg-card border border-border rounded-lg p-4 ${isActive ? "animate-scale-in" : ""}`} 
               style={{ animationDelay: "1.2s" }}>
            <p className="text-center text-foreground font-medium">
              💡 Step 1: Input your Resume or Career Goals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}