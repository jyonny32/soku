import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is Soku compatible with my browser?",
      answer: "Yes! Soku works perfectly with Chrome, Firefox, Edge, and any Chromium-based browser. We support both desktop and mobile versions where extensions are available."
    },
    {
      question: "How does Soku protect my privacy?",
      answer: "Your privacy is our top priority. All word processing happens locally in your browser - we never send your reading data to our servers. Only the word you click is processed to generate the flashcard, and this data is not stored or tracked."
    },
    {
      question: "Do I need an existing Anki setup?",
      answer: "Yes, you'll need Anki installed on your device and AnkiConnect add-on enabled. Don't worry - we provide a complete setup guide that takes less than 5 minutes, even for beginners."
    },
    {
      question: "Can I customize the flashcard format?",
      answer: "Absolutely! Soku comes with beautiful default templates, but you can fully customize the card layout, fields, and styling to match your study preferences. You can also choose which deck new cards go to."
    },
    {
      question: "How accurate are the example sentences?",
      answer: "Our example sentences come from verified Japanese corpora and native speaker databases. We use advanced algorithms to select the most relevant and natural examples for each word and context."
    },
    {
      question: "Does Soku work with different Japanese text types?",
      answer: "Yes! Soku handles kanji, hiragana, katakana, and mixed text. It works on websites, PDFs, video subtitles, and any text you can select. It even handles old kanji variants and modern slang."
    },
    {
      question: "Is there a cost to use Soku?",
      answer: "Soku is completely free to use! We believe language learning tools should be accessible to everyone. There are no hidden fees, premium tiers, or subscription costs."
    },
    {
      question: "What if I encounter a word Soku doesn't recognize?",
      answer: "While Soku recognizes 99.2% of Japanese vocabulary, if you find a word it doesn't know, you can easily report it through the extension. We regularly update our dictionary with new words and expressions."
    },
    {
      question: "Can I use Soku for other languages?",
      answer: "Currently, Soku is specifically designed and optimized for Japanese learning. We're considering expanding to other languages based on user demand, but our focus remains on making the best possible Japanese learning experience."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about getting started with Soku.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border rounded-xl shadow-card px-6 hover:shadow-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-card border border-border rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join our Discord community of 5,000+ Japanese learners for real-time support and study tips.
            </p>
            <button className="border border-border bg-card text-card-foreground px-6 py-3 rounded-lg hover:bg-muted hover:text-foreground transition-all duration-300">
              Join Discord Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;