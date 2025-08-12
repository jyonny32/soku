import { Button } from "@/components/ui/button";
import { Star, Chrome, Download } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            {/* Social proof badge */}
            <div className="inline-flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Loved by 10,000+ Japanese learners</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight">
              Stop Making Flashcards.<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Start Learning.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Turn any Japanese word into a perfect Anki flashcard with a single click. 
              Complete with kanji, readings, meanings, and example sentences.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                <Chrome className="w-5 h-5" />
                Install for Chrome
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Download className="w-5 h-5" />
                Download for Firefox
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span>No Account Required</span>
              </div>
            </div>
          </div>

          {/* Right column - Mockup */}
          <div className="relative">
            <div className="relative">
              <img 
                src={heroMockup} 
                alt="Soku extension creating an Anki flashcard from a Japanese word"
                className="w-full h-auto rounded-2xl shadow-card border border-border/50"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;