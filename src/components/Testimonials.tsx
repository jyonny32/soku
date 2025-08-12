import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "JLPT N2 Student",
      content: "The essential extension for anyone seriously wanting to learn a language, period! I've created over 1,000 cards with Soku and my retention rate has never been better.",
      rating: 5,
      timeUsed: "8 months"
    },
    {
      name: "Mike Rodriguez",
      role: "Immersion Learner",
      content: "In 3 months, I feel further than I got in my first 3 years of traditional study! The example sentences are perfect and the speed is incredible.",
      rating: 5,
      timeUsed: "3 months"
    },
    {
      name: "Emma Watson",
      role: "Anime Enthusiast",
      content: "I have Soku's products to thank for getting me to JLPT N2 level Japanese. Watching anime with subtitles has become so much more productive!",
      rating: 5,
      timeUsed: "1 year"
    },
    {
      name: "David Kim",
      role: "Professional Translator",
      content: "As someone who learns languages for work, Soku has saved me countless hours. The accuracy of definitions and context is remarkable.",
      rating: 5,
      timeUsed: "6 months"
    },
    {
      name: "Lisa Johnson",
      role: "University Student",
      content: "My Japanese professor recommended Soku and it's been a game-changer. I can focus on reading comprehension instead of dictionary lookups.",
      rating: 5,
      timeUsed: "4 months"
    },
    {
      name: "Alex Thompson",
      role: "Self-Study Learner",
      content: "Finally, an extension that understands how Japanese learners actually study. The Anki integration is seamless and the cards are beautiful.",
      rating: 5,
      timeUsed: "7 months"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Loved by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              10,000+ learners
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't take our word for it. Here's what Japanese learners are saying about Soku.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gradient-card border border-border rounded-xl shadow-card hover:shadow-glow transition-all duration-300 group">
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
                <div className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded-full">
                  {testimonial.timeUsed}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof banner */}
        <div className="mt-16 text-center p-8 bg-gradient-primary rounded-2xl shadow-glow">
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">10,000+</div>
            <div className="text-xl mb-4">Happy Japanese learners can't be wrong</div>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-white text-white" />
              ))}
              <span className="ml-2 text-lg font-semibold">4.9/5 average rating</span>
            </div>
            <p className="text-white/90 max-w-2xl mx-auto">
              Join the community of learners who've already transformed their Japanese study routine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;