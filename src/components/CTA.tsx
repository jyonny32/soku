import { Button } from "@/components/ui/button";
import { Chrome, Download, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Urgency indicator */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">Limited time: Get early access</span>
          </div>

          {/* Main CTA headline */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Stop wasting time making{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              flashcards
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Join 10,000+ learners who've already transformed their Japanese study routine. 
            Install Soku now and start creating perfect Anki cards in seconds.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button variant="cta" size="lg" className="text-xl px-12 py-8 shadow-button hover:shadow-button hover:scale-105">
              <Chrome className="w-6 h-6" />
              Install for Chrome - Free
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-12 py-8 hover:scale-105">
              <Download className="w-6 h-6" />
              Download for Firefox
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <span>2,000+ installs this week</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <span>4.9★ rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <span>100% free forever</span>
            </div>
          </div>

          {/* Final urgency */}
          <div className="mt-12 p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm">
            <p className="text-lg font-medium text-accent mb-2">
              Early Access Ending Soon
            </p>
            <p className="text-muted-foreground">
              Join now to secure your spot in the exclusive beta community and get lifetime priority support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;