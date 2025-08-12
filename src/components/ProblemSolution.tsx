import { X, Check, ArrowRight } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "Manually creating flashcards is slow and tedious",
    "Switching between multiple apps breaks immersion",
    "Hunting for example sentences and pronunciations",
    "Copy-pasting and formatting cards takes forever",
    "Inconsistent card formats make studying harder"
  ];

  const solutions = [
    "One-click card creation in under 2 seconds",
    "Stay in your learning flow - no app switching",
    "Auto-generated example sentences from native sources",
    "Perfect formatting, every time, automatically",
    "Consistent, beautiful cards optimized for retention"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Learning Japanese is exciting — until you try to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              make flashcards
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Suddenly you're juggling tabs, copy-pasting text, formatting cards, and hunting for example sentences. 
            It's slow, tedious, and breaks your immersion.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Before */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-destructive mb-4">Before: Frustrating Manual Work</h3>
            </div>
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{problem}</span>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* After */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-accent mb-4">After: Effortless Learning</h3>
            </div>
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{solution}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bridge */}
        <div className="text-center mt-16 p-8 bg-gradient-card border border-border rounded-2xl shadow-card">
          <h3 className="text-2xl font-bold mb-4">
            That's what <span className="bg-gradient-primary bg-clip-text text-transparent">Soku</span> does.
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            It's a Chrome and Firefox extension designed for Japanese learners who want to spend less time making cards 
            and more time learning. Click a word, and it appears in your Anki deck with everything you need to master it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;