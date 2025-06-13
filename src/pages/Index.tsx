import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, Sparkles, Leaf, Book, MessageSquare, Calendar, Mail, FileText, Camera, Clock, Globe, FileSpreadsheet, Gift, Plane, ShoppingCart, Phone, Video, Users } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early access request for:", email);
    // Here you would typically send the email to your backend
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background floating-elements">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-daylight-subtle relative overflow-hidden">
        <div className="container max-w-4xl text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-foreground tracking-tight">
            Vyasthi
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your life, in flow.
          </p>
          <p className="text-lg md:text-xl font-light mb-8 text-primary/80 max-w-2xl mx-auto leading-relaxed italic">
            Living Through Your Mind
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

      {/* How Vyasthi Learns Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-foreground">
            Learning from the rhythm of your life.
          </h2>
          <p className="text-lg text-center mb-16 text-muted-foreground max-w-3xl mx-auto">
            Vyasthi understands you through the digital traces of your daily experience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Email Patterns</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your communication style, priorities, and relationships through email interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Calendar & Schedule</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your natural rhythms, meeting preferences, and how you structure your time.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Voice & Messages</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your unique voice, tone, and the way you express thoughts and emotions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Documents & Notes</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your thinking patterns, project approaches, and knowledge organization.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Photos & Memories</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Important moments, relationships, and what you choose to capture and remember.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Book className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Reading & Research</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your interests, learning patterns, and intellectual curiosities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Beyond ChatGPT Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-card/20 to-transparent">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-foreground">
            Beyond conversation. Into action.
          </h2>
          <p className="text-lg text-center mb-16 text-muted-foreground max-w-3xl mx-auto">
            While ChatGPT offers brilliant conversations, Vyasthi becomes an extension of you—acting autonomously in your digital world.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageSquare className="w-3 h-3 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">ChatGPT</h3>
                  <p className="text-muted-foreground text-sm">Responds when you ask, offers advice and information, but requires your constant input to take action.</p>
                </div>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  "Can you help me write an email to reschedule my meeting?"
                </p>
                <p className="text-sm text-foreground mt-2">
                  → Provides a draft you still need to send yourself
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-3 h-3 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vyasthi</h3>
                  <p className="text-muted-foreground text-sm">Acts autonomously in your voice, manages your digital life, and takes real action while you focus on what matters.</p>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  Notices your meeting conflict, automatically drafts and sends a rescheduling email in your voice, finds alternative times that work for everyone, and updates your calendar—all without you lifting a finger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Advanced Replica Capabilities Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-foreground">
            Your digital twin in action.
          </h2>
          <p className="text-lg text-center mb-16 text-muted-foreground max-w-3xl mx-auto">
            Vyasthi doesn't just know you—it becomes you. Attending meetings, making calls, and handling your digital presence with the authenticity that only comes from truly understanding who you are.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Meeting Attendance</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Attends routine meetings as you, takes notes, asks your typical questions, and provides you with intelligent summaries and action items.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Voice Calls</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Makes calls in your voice for appointments, reservations, and routine inquiries, handling conversations with your natural speaking patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Relationship Management</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Maintains your relationships by sending thoughtful check-ins, remembering important dates, and following up on conversations in your authentic style.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Productivity & Browser Integration Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-foreground">
            Your digital world, orchestrated seamlessly.
          </h2>
          <p className="text-lg text-center mb-16 text-muted-foreground max-w-3xl mx-auto">
            Vyasthi doesn't just chat—it acts. It navigates your browser, manages your data, and handles complex research with the intuition that only comes from truly knowing you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Smart Browsing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Opens tabs, fills forms, and navigates websites in your unique browsing style, finding exactly what you need.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileSpreadsheet className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Data & Sheets</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Creates comprehensive spreadsheets, analyzes data patterns, and generates reports in your preferred format.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Personal Research</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Draws from your conversations and memories to research perfect gifts, recommendations, and solutions tailored to your relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Proactive Examples Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-foreground">
            Anticipating your needs before you know them.
          </h2>
          <p className="text-lg text-center mb-16 text-muted-foreground max-w-3xl mx-auto">
            Vyasthi doesn't wait for commands—it observes, learns, and acts proactively to smooth your path.
          </p>
          
          <div className="space-y-8">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Morning Flow</h3>
                    <p className="text-muted-foreground mb-4">
                      At 6:30 AM, Vyasthi notices unusual traffic on your route to work and automatically sends a gentle notification suggesting you leave 15 minutes earlier. It also orders your usual coffee for pickup, knowing you'll need the extra time for your important presentation.
                    </p>
                    <div className="bg-card/50 p-3 rounded-lg">
                      <p className="text-sm text-foreground italic">
                        "Good morning! I've noticed heavy traffic on Oak Street. Your coffee will be ready at 7:45 AM, giving you time for a calm commute to your 9 AM presentation. You've got this! 🌟"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">The Perfect Gift</h3>
                    <p className="text-muted-foreground mb-4">
                      Remembering your friend mentioned loving vintage jazz records and struggling with work stress, Vyasthi researches rare Miles Davis vinyl, finds one from their birth year, and locates a nearby record store. It even drafts a thoughtful note about why this particular album reminded you of them.
                    </p>
                    <div className="bg-card/50 p-3 rounded-lg">
                      <p className="text-sm text-foreground italic">
                        "Found a 1967 first pressing of 'Nefertiti' at Vintage Sounds downtown. I know how much Sarah loves Miles Davis, and this was recorded the year she was born. Should I reserve it and draft that note we talked about?"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Travel Anticipation</h3>
                    <p className="text-muted-foreground mb-4">
                      Three weeks before your mom's birthday, Vyasthi notices flights to your hometown are getting expensive. Knowing your travel patterns and that you always visit for her birthday, it books your preferred aisle seat, arranges airport pickup, and even researches that new bakery she mentioned wanting to try.
                    </p>
                    <div className="bg-card/50 p-3 rounded-lg">
                      <p className="text-sm text-foreground italic">
                        "Flight prices are rising for the weekend of your mom's birthday. I've found your usual 6 PM Friday departure with an aisle seat. Also discovered 'Sweet Memories Bakery' has her favorite lemon cake. Shall I book the flight and make a reservation?"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileSpreadsheet className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Work Intelligence</h3>
                    <p className="text-muted-foreground mb-4">
                      Before your quarterly review, Vyasthi automatically compiles your accomplishments from emails, calendar events, and project files into a comprehensive summary. It identifies patterns in your work style, highlights your impact, and even suggests talking points based on your manager's communication preferences.
                    </p>
                    <div className="bg-card/50 p-3 rounded-lg">
                      <p className="text-sm text-foreground italic">
                        "I've prepared your Q3 summary—15 key projects completed, 3 process improvements implemented. Based on previous feedback, I've emphasized the cost savings you achieved. Would you like me to format this for your review meeting?"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Life Balance</h3>
                    <p className="text-muted-foreground mb-4">
                      Noticing you've had back-to-back meetings for three days, Vyasthi automatically blocks 30 minutes in your calendar for a walk, books your favorite massage therapist for the weekend, and suggests a quiet dinner spot for tonight—all while ordering groceries so you don't have to worry about the mundane.
                    </p>
                    <div className="bg-card/50 p-3 rounded-lg">
                      <p className="text-sm text-foreground italic">
                        "You've been running at full speed. I've carved out some breathing room in your schedule, ordered your usual groceries for delivery, and made a few suggestions for recharging. Your well-being matters."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
