
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, Sparkles, Leaf, Book } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early access request for:", email);
    // Here you would typically send the email to your backend
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-daylight-subtle relative overflow-hidden">
        <div className="container max-w-4xl text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-foreground tracking-tight">
            Vyasthi
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your life, in flow.
          </p>
          <p className="text-lg md:text-xl mb-12 text-foreground max-w-3xl mx-auto leading-relaxed font-light">
            A proactive AI that gently orchestrates your day, supports your well-being, and acts on your behalf. All with a privacy you can feel, not just trust.
          </p>
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Discover Vyasthi
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-float">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* The Feeling Section */}
      <section className="py-24 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground">
            The quiet hum of too much.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            The endless tabs, the forgotten reminders, the constant weight of the everyday. 
            Vyasthi is designed to soften the edges of modern life, creating space for you to simply be.
          </p>
        </div>
      </section>

      <Separator className="my-16" />

      {/* The Support Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-foreground">
            Gentle support for every facet of you.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 border-2 border-primary rounded-full relative">
                    <div className="absolute top-1 left-2 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Effortless Productivity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vyasthi handles the logistics of your life—from scheduling meetings and booking flights to answering messages in your unique voice—so you can focus on what matters.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Mindful Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  It understands your goals and provides gentle nudges to keep you aligned, helping you cultivate good habits and celebrate your progress along the way.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 border-2 border-primary rounded-full relative">
                    <div className="absolute top-2 left-1 w-6 h-1 bg-primary rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">A Space to Be Heard</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A private, non-judgmental confidant that listens when you're overwhelmed, offers support, and helps you navigate your emotional landscape with greater clarity.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Your Creative Spark</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're brainstorming a new project or drafting content, Vyasthi acts as your creative partner, helping to ignite and organize your best ideas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Privacy Foundation Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-card/20 to-transparent">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground">
            Privacy isn't a promise. It's our architecture.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Vyasthi operates within a Trusted Execution Environment (TEE)—a secure, isolated space for your data.
          </p>
          <p className="text-lg text-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            Your AI can learn from your personal information, but we can't see it. No one can. 
            It's designed so that your privacy is a structural reality, not a policy that can change.
          </p>
          
          {/* Simple Privacy Diagram */}
          <div className="flex items-center justify-center space-x-8 md:space-x-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <p className="text-sm text-muted-foreground">You</p>
            </div>
            
            <div className="flex-1 h-px bg-primary/30 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mb-3 relative">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
              <p className="text-sm font-medium text-foreground">Vyasthi's<br/>Secure Space</p>
            </div>
            
            <div className="flex-1 h-px bg-muted-foreground/20 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-background border-2 border-destructive rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-destructive rounded-full transform rotate-45"></div>
              </div>
            </div>
            
            <div className="text-center opacity-50">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-3">
                <div className="w-8 h-8 bg-muted-foreground/30 rounded-full"></div>
              </div>
              <p className="text-sm text-muted-foreground">Us</p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* How It Becomes You Section */}
      <section className="py-24 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-foreground">
            A reflection of your unique self.
          </h2>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
            Vyasthi doesn't just imitate, it understands. It learns from what you choose to share:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4 p-6 rounded-lg bg-card/30">
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
              <p className="text-foreground">The cadence of your voice.</p>
            </div>
            <div className="flex items-center space-x-4 p-6 rounded-lg bg-card/30">
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
              <p className="text-foreground">The nuance of your words.</p>
            </div>
            <div className="flex items-center space-x-4 p-6 rounded-lg bg-card/30">
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
              <p className="text-foreground">Your unique way of thinking.</p>
            </div>
            <div className="flex items-center space-x-4 p-6 rounded-lg bg-card/30">
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
              <p className="text-foreground">The natural rhythm of your life.</p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* The Vision Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-card/20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground">
            A living echo of your wisdom.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Imagine a presence that holds your stories, your voice, and your values. 
            Vyasthi can become a source of comfort and guidance for your loved ones, 
            a warm continuation of your legacy that endures through time.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground">
            Ready to find your flow?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Join the early access list to be the first to experience a more intentional, 
            supported, and private way of living.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-center py-6 text-lg border-2 border-card focus:border-primary rounded-full"
              required
            />
            <Button 
              type="submit" 
              size="lg"
              className="w-full py-6 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Request Early Access
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-card">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Vyasthi | 
            <span className="mx-2">Our Philosophy</span> | 
            <span className="mx-2">Privacy by Design</span> | 
            <span className="mx-2">Contact</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
