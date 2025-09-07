import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";
import { IntroScene } from "./scenes/IntroScene";
import { InputScene } from "./scenes/InputScene";
import { ResumeParsingScene } from "./scenes/ResumeParsingScene";
import { RoleMatchingScene } from "./scenes/RoleMatchingScene";
import { SkillGapScene } from "./scenes/SkillGapScene";
import { JobTrendsScene } from "./scenes/JobTrendsScene";
import { RoadmapScene } from "./scenes/RoadmapScene";
import { OutcomesScene } from "./scenes/OutcomesScene";
import { ClosingScene } from "./scenes/ClosingScene";

const scenes = [
  { component: IntroScene, duration: 5000, title: "Introduction" },
  { component: InputScene, duration: 4000, title: "Input Phase" },
  { component: ResumeParsingScene, duration: 4000, title: "Resume Parsing" },
  { component: RoleMatchingScene, duration: 4000, title: "Role Matching" },
  { component: SkillGapScene, duration: 5000, title: "Skill Gap Analysis" },
  { component: JobTrendsScene, duration: 4000, title: "Job Trends" },
  { component: RoadmapScene, duration: 5000, title: "Learning Roadmap" },
  { component: OutcomesScene, duration: 4000, title: "Expected Outcomes" },
  { component: ClosingScene, duration: 4000, title: "Closing" },
];

export function ExplainerVideo() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100;
        if (newProgress >= scenes[currentScene].duration) {
          if (currentScene < scenes.length - 1) {
            setCurrentScene((curr) => curr + 1);
            return 0;
          } else {
            setIsPlaying(false);
            return 0;
          }
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, currentScene]);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleRestart = () => {
    setCurrentScene(0);
    setProgress(0);
    setIsPlaying(true);
  };

  const handleSceneSelect = (index: number) => {
    setCurrentScene(index);
    setProgress(0);
    setIsPlaying(false);
  };

  const CurrentSceneComponent = scenes[currentScene].component;
  const progressPercentage = (progress / scenes[currentScene].duration) * 100;

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Video Player */}
      <div className="relative h-screen overflow-hidden">
        <CurrentSceneComponent isActive={true} />
        
        {/* Progress Bar */}
        <div className="absolute bottom-20 left-0 right-0 px-8">
          <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={isPlaying ? handlePause : handlePlay}
                className="bg-card/50 border-border/50"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRestart}
                className="bg-card/50 border-border/50"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                {scenes[currentScene].title}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-gradient-primary h-2 rounded-full transition-all duration-100"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scene Navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 space-y-2">
        {scenes.map((scene, index) => (
          <button
            key={index}
            onClick={() => handleSceneSelect(index)}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentScene
                ? "bg-primary shadow-glow"
                : index < currentScene
                ? "bg-accent"
                : "bg-muted hover:bg-muted-foreground"
            }`}
            title={scene.title}
          />
        ))}
      </div>
    </div>
  );
}