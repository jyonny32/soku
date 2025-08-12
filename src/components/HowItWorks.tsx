import { MousePointer, Sparkles, BookOpen } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MousePointer,
      title: "Click any Japanese word",
      description: "Reading an article, watching anime, or browsing social media? Just click on any word you don't know.",
      step: "1"
    },
    {
      icon: Sparkles,
      title: "Magic happens instantly",
      description: "Soku automatically finds the kanji, kana, romaji, meaning, and perfect example sentences.",
      step: "2"
    },
    {
      icon: BookOpen,
      title: "Perfect card in Anki",
      description: "Your beautifully formatted flashcard appears in your chosen Anki deck, ready for spaced repetition.",
      step: "3"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            So simple, it feels like{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              magic
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three steps. Two seconds. Zero interruptions to your learning flow.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary transform -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step number */}
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto shadow-glow group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-card border border-border rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-card group-hover:shadow-glow transition-all duration-300">
                  <step.icon className="w-10 h-10 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-card border border-border rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold mb-4">Ready to transform your Japanese learning?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join thousands of learners who've already supercharged their vocabulary acquisition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-secondary-foreground font-semibold px-8 py-4 rounded-lg shadow-button hover:shadow-button hover:bg-secondary/90 hover:scale-105 transition-all duration-300">
                Install Chrome Extension
              </button>
              <button className="border border-border bg-card text-card-foreground px-8 py-4 rounded-lg hover:bg-muted hover:text-foreground transition-all duration-300">
                Download for Firefox
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;