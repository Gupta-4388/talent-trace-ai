import { TrendingUp, Calendar, MapPin, DollarSign } from "lucide-react";

interface SceneProps {
  isActive: boolean;
}

export function JobTrendsScene({ isActive }: SceneProps) {
  const trendData = [
    { role: "AI Engineer", growth: 45, salary: "$145k", demand: "Very High" },
    { role: "ML Engineer", growth: 30, salary: "$135k", demand: "High" },
    { role: "Data Scientist", growth: 25, salary: "$120k", demand: "High" },
    { role: "Cloud Engineer", growth: 35, salary: "$125k", demand: "Very High" },
  ];

  return (
    <div className="scene-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 ${isActive ? "animate-fade-in" : ""}`}>
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Step 5: Real-Time Job Market Insights
          </h2>
          <p className="text-xl text-muted-foreground">
            Stay ahead with current market trends and demand forecasts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Trending Chart */}
          <div className={`space-y-6 ${isActive ? "animate-scale-in" : ""}`} style={{ animationDelay: "0.3s" }}>
            <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Job Demand Growth</h3>
              </div>

              {/* Chart Bars */}
              <div className="space-y-4">
                {trendData.map((item, index) => (
                  <div key={item.role} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{item.role}</span>
                      <span className="text-sm font-bold text-primary">+{item.growth}%</span>
                    </div>
                    
                    <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-primary rounded-full transition-all duration-1000 ${
                          isActive ? "animate-pulse" : ""
                        }`}
                        style={{ 
                          width: `${(item.growth / 50) * 100}%`,
                          animationDelay: `${0.6 + index * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlight */}
              <div className={`mt-6 bg-primary/10 border border-primary/20 rounded-lg p-4 ${
                isActive ? "pulse-glow" : ""
              }`} style={{ animationDelay: "1.4s" }}>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-primary font-semibold">
                    AI Engineer demand ↑ 45% in 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className={`space-y-6 ${isActive ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.6s" }}>
            {/* Key Insights */}
            <div className="space-y-4">
              {[
                {
                  icon: Calendar,
                  title: "Hiring Peak",
                  value: "Q1 2025",
                  desc: "Best time to apply",
                  color: "text-primary"
                },
                {
                  icon: MapPin,
                  title: "Top Locations",
                  value: "SF, NYC, Austin",
                  desc: "Highest demand cities",
                  color: "text-secondary"
                },
                {
                  icon: DollarSign,
                  title: "Salary Range",
                  value: "$120k - $145k",
                  desc: "Average for ML roles",
                  color: "text-accent"
                }
              ].map((insight, index) => (
                <div
                  key={insight.title}
                  className={`bg-card border border-border rounded-xl p-6 shadow-soft glow-effect ${
                    isActive ? "animate-slide-in-right" : ""
                  }`}
                  style={{ animationDelay: `${0.9 + index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      insight.color === "text-primary" ? "bg-primary/10" :
                      insight.color === "text-secondary" ? "bg-secondary/10" : "bg-accent/10"
                    }`}>
                      <insight.icon className={`w-6 h-6 ${insight.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{insight.title}</h4>
                      <div className={`text-lg font-bold ${insight.color} mb-1`}>
                        {insight.value}
                      </div>
                      <p className="text-sm text-muted-foreground">{insight.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Market Prediction */}
            <div className={`bg-card border border-border rounded-xl p-6 shadow-soft ${
              isActive ? "animate-scale-in" : ""
            }`} style={{ animationDelay: "1.5s" }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                🔮 Market Prediction
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Job Openings</span>
                  <span className="font-bold text-primary">+2,500 new roles</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Competition</span>
                  <span className="font-bold text-secondary">Moderate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Remote Work</span>
                  <span className="font-bold text-accent">85% opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className={`mt-8 bg-card border border-border rounded-lg p-4 text-center ${isActive ? "animate-scale-in" : ""}`} 
             style={{ animationDelay: "1.8s" }}>
          <p className="text-foreground font-medium">
            📈 Step 5: Real-time job market insights
          </p>
        </div>
      </div>
    </div>
  );
}